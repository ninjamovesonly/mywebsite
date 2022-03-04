import Image from "next/image";
import styles from "../styles/Home.module.css";
import ToggleSwitch from "./toggle";

export default function HeaderContainer() {
  const theme = "light";

  return (
    <section className={styles.header}>
      <div className={styles["header-item"]}>
        <ToggleSwitch />
      </div>

      <div className={styles["header-item"]}>
        <span>
          <u>rants</u>
        </span>
        <Image
          alt="meduim icon"
          src={`/${theme}/medium.svg`}
          width={30}
          height={30}
        />
      </div>
    </section>
  );
}
