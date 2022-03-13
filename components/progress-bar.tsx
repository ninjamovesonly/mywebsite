import styles from "../styles/Home.module.css";

export default function ProgressBar({
  startTime,
  endTime,
}: {
  startTime: number;
  endTime: number;
}) {
  const calculatePercentage = () => {
    let now = new Date(Date.now()).getTime();
    console.log("times", endTime, startTime);
    let fullDistance = endTime - startTime;
    let currentDistance = now - startTime;
    let diff = fullDistance - currentDistance;
    let per = Math.round((currentDistance / fullDistance) * 100);
    console.log("dist", now, fullDistance, currentDistance, per, diff);
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
