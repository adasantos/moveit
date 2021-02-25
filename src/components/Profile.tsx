import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/adasantos.png" alt="André Santos"/>
      <div>
        <strong>André Santos</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/> 
          Level 1
        </p>
      </div>
    </div>
  );
}