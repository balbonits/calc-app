import styles from './Calculator.module.css';

export default function Calculator() {
  return (
    <div className={styles.calculator}>
      {/* Display area */}
      <div className={styles.display}>0</div>
      {/* Button grid */}
      <div className={styles.buttonGrid}>
        {/* Buttons will go here */}
      </div>
    </div>
  );
}
