import Head from 'next/head';
import CompletedChalanges from "../components/CompletedChalanges";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import Countdown from "../components/Countdown";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>início | moveit</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChalanges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
