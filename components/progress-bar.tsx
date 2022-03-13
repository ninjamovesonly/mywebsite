import styles from "../styles/Home.module.css";

export default function ProgressBar({
  startTime,
  endTime,
}: {
  startTime: number;
  endTime: number;
}) {
  const calculatePercentage = () => {
    let currentTime = new Date(Date.now()).getTime();

    let per = Math.round((currentTime / endTime) * 100);
    return per;
  };

  return (
    <div className={styles["progress-bar-box"]} style={{ width: "100%" }}>
      <div
        className={styles["progress-bar-timer"]}
        style={{ width: `${calculatePercentage()}%` }}
      ></div>
    </div>
  );
}
