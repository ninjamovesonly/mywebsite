import { useMemo, useState } from "react";

import ProgressBar from "./progress-bar";
import StartPomodoroTimerButton from "./start-pomodoro-timer-button";
import { useAppContext } from "../context/state";
import Pomodoro from "../lib/pomodoro-timer";

import { POMODORO_TIME_STATUS, POMODORO_TIME_LABELS } from "../lib/consts";

export default function PomodoroTimer() {
  const [status, setStatus] = useState(POMODORO_TIME_STATUS.IDLE);
  const [label, setLabel] = useState(POMODORO_TIME_LABELS.START_TO_FOCUS);
  const { theme }: any = useAppContext();
  const pomodoro = useMemo(() => new Pomodoro(), []);

  const start = () => {
    return pomodoro.start(Date.now());
  };

  return (
    <div className={`pomodoro-timer-box pomodoro-timer-box-${theme}`}>
      <ProgressBar
        currentTime={pomodoro.currentTime}
        totalTime={pomodoro.totalTime}
      />
      <h2 className="pomodoro-timer-text">{pomodoro.currentTime}:00</h2>
      <StartPomodoroTimerButton label={label} />
    </div>
  );
}
