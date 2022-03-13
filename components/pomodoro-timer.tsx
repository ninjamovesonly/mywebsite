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
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const { theme }: any = useAppContext();
  const pomodoro = useMemo(() => new Pomodoro(), []);

  const endTimer = () => {
    setStatus(POMODORO_TIME_STATUS.IDLE);
    setLabel(POMODORO_TIME_LABELS.START_TO_FOCUS);
    setRemainingMinute(25);
    setRemainingSecond("00");
  };

  const updateCountdown = (
    m: number,
    s: number,
    start: number,
    end: number
  ) => {
    let minutes: number | string = m;
    let seconds: number | string = s;
    let startTime: number = start;
    let endTime: number = end;

    if (seconds < 10) {
      seconds = `0${Math.abs(seconds)}`;
    }

    setRemainingMinute(minutes);
    setRemainingSecond(seconds);
    setStartTime(startTime);
    setEndTime(endTime);
  };

  const handleClick = () => {
    switch (label) {
      case POMODORO_TIME_LABELS.START_TO_FOCUS: {
        setStatus(POMODORO_TIME_STATUS.ACTIVE);
        setLabel(POMODORO_TIME_LABELS.PAUSE);

        return pomodoro.start((minute, second, start, end) =>
          updateCountdown(minute, second, start, end)
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

          return pomodoro.continue((minute, second, start, end) =>
            updateCountdown(minute, second, start, end)
          );
        }
      }
    }
  };

  const stopTimer = () => {
    endTimer();

    return pomodoro.end();
  };

  return (
    <div className={`pomodoro-timer-box pomodoro-timer-box-${theme}`}>
      <ProgressBar startTime={startTime} endTime={endTime} />
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
