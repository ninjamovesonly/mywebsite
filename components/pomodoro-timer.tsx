import { useMemo, useState } from "react";

import ProgressBar from "./progress-bar";
import StartPomodoroTimerButton from "./start-pomodoro-timer-button";
import StopPomodoroTimerButton from "./stop-button";
import { useAppContext } from "../context/state";
import Pomodoro from "../lib/pomodoro-timer";

import { POMODORO_TIME_STATUS, POMODORO_TIME_LABELS } from "../lib/consts";

export default function PomodoroTimer() {
  const [status, setStatus] = useState(POMODORO_TIME_STATUS.IDLE);
  const [label, setLabel] = useState(POMODORO_TIME_LABELS.START_TO_FOCUS);
  const [remainingMinute, setRemainingMinute] = useState<number | string>(25);
  const [remainingSecond, setRemainingSecond] = useState<number | string>("00");
  const { theme }: any = useAppContext();
  const pomodoro = useMemo(() => new Pomodoro(), []);

  const updateCountdown = (m: number, s: number) => {
    let minutes: number | string = m;
    let seconds: number | string = s;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    setRemainingMinute(minutes);
    setRemainingSecond(seconds);
  };

  const handleClick = () => {
    switch (label) {
      case POMODORO_TIME_LABELS.START_TO_FOCUS: {
        setStatus(POMODORO_TIME_STATUS.ACTIVE);
        setLabel(POMODORO_TIME_LABELS.PAUSE);

        return pomodoro.start((minute, second) =>
          updateCountdown(minute, second)
        );
      }

      case POMODORO_TIME_LABELS.PAUSE: {
        if (status === POMODORO_TIME_STATUS.ACTIVE) {
          setStatus(POMODORO_TIME_STATUS.PAUSED);
          setLabel(POMODORO_TIME_LABELS.CONTINUE);

          return pomodoro.pause();
        }
      }

      case POMODORO_TIME_LABELS.CONTINUE: {
        if (status === POMODORO_TIME_STATUS.PAUSED) {
          setStatus(POMODORO_TIME_STATUS.ACTIVE);
          setLabel(POMODORO_TIME_LABELS.PAUSE);

          return pomodoro.continue((minute, second) =>
            updateCountdown(minute, second)
          );
        }
      }
    }
  };

  const stopTimer = () => {
    setStatus(POMODORO_TIME_STATUS.IDLE);
    setLabel(POMODORO_TIME_LABELS.START_TO_FOCUS);
    setRemainingMinute(25);
    setRemainingSecond("00");

    return pomodoro.end();
  };

  return (
    <div className={`pomodoro-timer-box pomodoro-timer-box-${theme}`}>
      <ProgressBar currentTime={remainingMinute} totalTime={remainingSecond} />
      <h2 className="pomodoro-timer-text">
        {remainingMinute}:{remainingSecond}
      </h2>

      <StartPomodoroTimerButton
        handleClick={handleClick}
        theme={theme}
        label={label}
      />

      {status === POMODORO_TIME_STATUS.ACTIVE && (
        <>
          <br />
          <StopPomodoroTimerButton handleClick={stopTimer} theme={theme} />
        </>
      )}
    </div>
  );
}
