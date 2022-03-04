import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function ProjectItem({ name, route, description }: any) {
  return (
    <>
      <Link href="/pomodoro" passHref>
        <div className={styles["project-item-conteiner"]}>
          <span>
            <b>{name}</b>
          </span>
          <span>{description}</span>
          <br />
        </div>
      </Link>
    </>
  );
}
