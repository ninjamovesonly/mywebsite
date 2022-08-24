import { DEFAULT_TIME_INTERVAL, HOUR, MINUTES, SECONDS } from './consts';

const DEFAULT_TIME = 25;

export default class PomodoroTimer {
  _interval: number | undefined;
  _minute: number;
  _second: number;
  _endTime: number;
  _startTime: number;
  _pausedAt: number | undefined;
  _continuedAt: number | undefined;
  _started: boolean;
  _status: string;

  constructor() {
    this._minute = 0;
    this._second = 0;
    this._startTime = new Date(Date.now()).getTime();
    this._endTime = new Date(Date.now()).getTime();
    this._pausedAt = undefined;
    this._continuedAt = undefined;
    this._started = false;
    this._status = 'focus';
  }

  start(callback: (m: number, s: number, start: number, end: number) => void) {
    if (!this._started) {
      this._startTime = new Date(Date.now()).getTime();
      this._endTime = new Date(Date.now() + DEFAULT_TIME * MINUTES).getTime();

      this._started = true;
    }

    this._interval = window.setInterval(() => {
      let now = new Date(Date.now()).getTime();

      let distance = this._endTime - now;

      this._minute = Math.floor((distance % HOUR) / MINUTES);
      this._second = Math.ceil((distance % MINUTES) / SECONDS);

      // eslint-disable-next-line no-compare-neg-zero
      if (this._minute === -1 && this._second === -0) {
        callback(0, this._second, this._startTime, this._endTime);
        clearInterval(this._interval);
      } else {
        callback(this._minute, this._second, this._startTime, this._endTime);
      }
    }, DEFAULT_TIME_INTERVAL);
  }

  pause() {
    this._pausedAt = new Date(Date.now()).getTime();
    clearInterval(this._interval);
  }

  end() {
    this._endTime = new Date(Date.now()).getTime();
    this._pausedAt = undefined;
    this._continuedAt = undefined;
    this._started = false;
    clearInterval(this._interval);
  }

  continue(
    callback: (m: number, s: number, start: number, end: number) => void
  ) {
    this._continuedAt = new Date(Date.now()).getTime();
    if (this._pausedAt) {
      const toAdd = this._continuedAt - this._pausedAt;
      this._endTime = this._endTime + toAdd;
      this._startTime = this._startTime + toAdd;
    }
    this.start((m: number, s: number) =>
      callback(m, s, this._startTime, this._endTime)
    );
  }
}
