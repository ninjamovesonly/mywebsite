import { DEFAULT_TIME_INTERVAL, HOUR, MINUTES, SECONDS } from "./consts";

const DEFAULT_TIME = 25;

export default class PomodoroTimer {
  _interval: number | undefined;
  _minute: number;
  _second: number;
  _endTime: number;
  _pausedAt: number | undefined;
  _continuedAt: number | undefined;
  _started: boolean;

  constructor() {
    this._minute = 0;
    this._second = 0;
    this._endTime = new Date().getTime();
    this._pausedAt = undefined;
    this._continuedAt = undefined;
    this._started = false;
  }

  start(callback: (m: number, s: number) => void) {
    if (!this._started) {
      this._endTime = new Date(Date.now() + DEFAULT_TIME * MINUTES).getTime();

      this._started = true;
    }

    this._interval = window.setInterval(() => {
      let now = new Date().getTime();

      let distance = this._endTime - now;

      this._minute = Math.ceil((distance % HOUR) / MINUTES);
      this._second = Math.ceil((distance % MINUTES) / SECONDS);

      if (distance === 0) {
        clearInterval(this._interval);
      } else {
        callback(this._minute, this._second);
      }
    }, DEFAULT_TIME_INTERVAL);
  }

  pause() {
    this._pausedAt = new Date().getTime();
    clearInterval(this._interval);
  }

  end() {
    this._endTime = new Date().getTime();
    this._pausedAt = undefined;
    this._continuedAt = undefined;
    this._started = false;
    clearInterval(this._interval);
  }

  continue(callback: (m: number, s: number) => void) {
    this._continuedAt = new Date().getTime();
    if (this._pausedAt) {
      this._endTime = this._endTime + (this._continuedAt - this._pausedAt);
    }
    this.start((m: number, s: number) => callback(m, s));
  }

  _countDown(startTime: Date, endTime: Date) {
    return `${startTime} - ${endTime}`;
  }
}
