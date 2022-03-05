import { useEffect, useState } from "react";
import { useAppContext } from "../context/state";
import styles from "../styles/Home.module.css";
import { THEME_COLORS } from "../lib/consts";

export default function ToggleSwitch() {
  const { theme, setTheme }: any = useAppContext();
  const [themeOpposite, setThemeOpposite] = useState("");

  useEffect(() => {
    setThemeOpposite(
      (currentTheme) =>
        (currentTheme =
          theme === THEME_COLORS.light ? THEME_COLORS.dark : THEME_COLORS.light)
    );
  }, [setThemeOpposite, theme]);

  const toggleThemeColor = () => {
    return theme === THEME_COLORS.light
      ? setTheme(THEME_COLORS.dark)
      : setTheme(THEME_COLORS.light);
  };

  return (
    <>
      <label className={styles.switch}>
        <input type="checkbox" onClick={() => toggleThemeColor()}></input>
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <span>
        <u>use {themeOpposite} theme</u>
      </span>
    </>
  );
}
