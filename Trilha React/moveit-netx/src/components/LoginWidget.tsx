import { ArrowRight } from "react-feather";
import Link from "next/link";
import styles from "../styles/components/LoginWidget.module.css";

export default function LoginWidget() {
  return (
    <div className={styles.loginContainer}>
      <h1>Bem-Vindo</h1>
      <div>
        <img src="icons/Github.svg" alt="Github Logo" />
        <p>
          Faça login com seu github <br /> para começar
        </p>
      </div>

      <div className={styles.loginInput}>
        <input placeholder="Digite seu username" type="text" />
        <Link href="/home">
          <button>
            <ArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}
