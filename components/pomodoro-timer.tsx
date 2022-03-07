import { useMemo, useState } from "react";

import ProgressBar from "./progress-bar";
import StartPomodoroTimerButton from "./start-pomodoro-timer-button";
import { useAppContext } from "../context/state";
import Pomodoro from "../lib/pomodoro-timer";

import { POMODORO_TIME_STATUS, POMODORO_TIME_LABELS } from "../lib/consts";

export default function PomodoroTimer() {
  const [status, setStatus] = useState(POMODORO_TIME_STATUS.IDLE);
  const [label, setLabel] = useState(POMODORO_TIME_LABELS.START_TO_FOCUS);
  const [remainingMinute, setRemainingMinute] = useState(0);
  const [remainingSecond, setRemainingSecond] = useState(0);
  const { theme }: any = useAppContext();
  const pomodoro = useMemo(() => new Pomodoro(), []);

  const updateCountdown = (m: number, s: number) => {
    setRemainingMinute(
      (currentRemainingMinute) => (currentRemainingMinute = m)
    );
    setRemainingSecond(
      (currentRemainingSecond) => (currentRemainingSecond = s)
    );
  };

  const handleClick = () => {
    pomodoro.start((minute, second) => updateCountdown(minute, second));

    switch (status) {
      case POMODORO_TIME_LABELS.START_TO_FOCUS: {
        console.log("clicked: ", POMODORO_TIME_LABELS.START_TO_FOCUS);
      }

      case POMODORO_TIME_LABELS.PAUSE: {
        console.log("clicked: ", POMODORO_TIME_LABELS.PAUSE);
      }

      case POMODORO_TIME_LABELS.STOP: {
        console.log("clicked: ", POMODORO_TIME_LABELS.STOP);
      }

      case POMODORO_TIME_LABELS.CONTINUE: {
        console.log("clicked: ", POMODORO_TIME_LABELS.CONTINUE);
      }
    }
  };

  const stopInterval = () => {
    pomodoro.end();
  };

  return (
    <div className={`pomodoro-timer-box pomodoro-timer-box-${theme}`}>
      <ProgressBar currentTime={remainingMinute} totalTime={remainingSecond} />
      <h2 className="pomodoro-timer-text">
        {remainingMinute}:{remainingSecond}
      </h2>
      {status === POMODORO_TIME_STATUS.ACTIVE && "active"}
      <StartPomodoroTimerButton
        handleClick={handleClick}
        theme={theme}
        label={label}
      />
      <button onClick={() => stopInterval()}>End</button>
    </div>
  );
}
