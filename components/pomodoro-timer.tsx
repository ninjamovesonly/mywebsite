import ProgressBar from "./progress-bar";
import StartPomodoroTimerButton from "./start-pomodoro-timer-button";
import { useAppContext } from "../context/state";

export default function PomodoroTimer() {
  const { theme }: any = useAppContext();
  const currentTime = 10;
  const totalTime = 25;

  return (
    <div className={`pomodoro-timer-box pomodoro-timer-box-${theme}`}>
      <ProgressBar currentTime={currentTime} totalTime={totalTime} />
      <h2 className="pomodoro-timer-text">{currentTime}:00</h2>
      <StartPomodoroTimerButton />
    </div>
  );
}
