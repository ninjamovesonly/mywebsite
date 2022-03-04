import ProgressBar from "./progress-bar";
import StartPomodoroTimerButton from "./start-pomodoro-timer-button";

export default function PomodoroTimer() {
  const currentTime = 10;
  const totalTime = 25;

  return (
    <>
      <ProgressBar currentTime={currentTime} totalTime={totalTime} />
      <h2>{currentTime}:00</h2>
      <StartPomodoroTimerButton />
    </>
  );
}
