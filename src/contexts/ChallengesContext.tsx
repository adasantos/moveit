import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenges {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number; 
  currentExperience: number; 
  experienceToNextLevel: number;
  challengesCompleted: number;
  activeChallenge: Challenges;
  levelUp: () => void;
  startNewChallenge: () => void,
  resetChallenge: () => void,
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(60);
  const [challengesCompleted, setChallengesCompleted] =  useState(10);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
     const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
     const challenge = challenges[randomChallengeIndex];

     setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider 
      value={{ 
        level, 
        currentExperience, 
        challengesCompleted, 
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}