import { useAppContext } from "../context/state";
import styles from "../styles/Home.module.css";

export default function ToggleSwitch() {
  const { theme, setTheme }: any = useAppContext();

  const toggleThemeColor = () => {
    console.log("toggling..");
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };
  //  onClick={toggleThemeColor()}
  return (
    <>
      <label className={styles.switch}>
        <input type="checkbox" onClick={() => toggleThemeColor()}></input>
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <span>
        <u>use dark theme</u>
      </span>
    </>
  );
}
