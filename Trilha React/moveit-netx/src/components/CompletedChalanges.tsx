import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/CompletedChalanges.module.css";

export default function CompletedChalanges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChalangesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
