import { POMODORO_TIME_STATUS, DEFAULT_TIME_INTERVAL } from "./consts";

export default class PomodoroTimer {
  cycles: number;
  status: string;
  _timerInterval: number;
  _interval: number | undefined;

  constructor() {
    this.cycles = 0;
    this.status = POMODORO_TIME_STATUS.IDLE;
    this._timerInterval = DEFAULT_TIME_INTERVAL;
  }

  get currentTime() {
    return 25;
  }

  get totalTime() {
    return 25;
  }

  start(time: number) {
    if ("reached" == "reached") {
      clearInterval(this._interval);
    }

    this._interval = setInterval(
      this._countDown(time, time),
      this._timerInterval
    );
  }

  end() {
    clearInterval(this._interval);
  }

  pause() {}

  continue() {}

  _countDown(startTime: Date, endTime: Date) {
    return `${startTime} - ${endTime}`;
  }
}
