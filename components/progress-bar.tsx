import styles from "../styles/Home.module.css";

export default function ProgressBar({
  currentTime,
  totalTime,
}: {
  currentTime: number;
  totalTime: number;
}) {
  // revisit this and style first

  const totatTimeCalculation = (time: number) => {
    if ((time = 25)) {
      return "100%";
    }

    return "100%";
  };

  return (
    <div
      className={styles["progress-bar-box"]}
      style={{ width: `${totatTimeCalculation(totalTime)}` }}
    >
      <div
        className={styles["progress-bar-timer"]}
        style={{ width: `${currentTime}` }}
      ></div>
    </div>
  );
}
