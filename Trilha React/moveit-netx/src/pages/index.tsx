import styles from "../styles/pages/Landing.module.css";
import { ArrowRight } from "react-feather";
import LoginWidget from "../components/LoginWidget";

export default function landingPage() {
  return (
    <div className={styles.landingContainer}>
      <section>
        <img src="Logo.svg" alt="Logo" />
        <LoginWidget />
      </section>
    </div>
  );
}
