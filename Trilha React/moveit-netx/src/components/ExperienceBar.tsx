import { useState } from "react";
import styles from "../styles/components/ExperienceBar.module.css";

export default function ExperienceBar() {
  const [experience, setExperience] = useState(180);

  function improveExperience() {
    setExperience(experience + 20);
  }

  return (
    <header className={styles.experienceBar}>
      <span>0 px</span>
      <div>
        <div style={{ width: `${experience / 6}%` }}></div>

        <span
          className={styles.currentExperience}
          style={{ left: `${experience / 6}%` }}
        >
          {experience} xp
        </span>
      </div>
      <span>600px</span>
    </header>
  );
}
