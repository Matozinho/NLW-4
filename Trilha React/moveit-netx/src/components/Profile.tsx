import styles from "../styles/components/Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Matozinho.png" alt="Felipi Matozinho" />
      <div>
        <strong>Felipi Matozinho</strong>
        <p>
          <img src="icons/level.svg" alt="levelIcon" />
          Level 1{" "}
        </p>
      </div>
    </div>
  );
}
