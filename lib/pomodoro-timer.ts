import { DEFAULT_TIME_INTERVAL, HOUR, MINUTES, SECONDS } from "./consts";

export default class PomodoroTimer {
  _interval: number | undefined;

  constructor() {}

  start(callback: (m: number, s: number) => void) {
    let timeDifference = 25;

    const endTime = new Date(Date.now() + timeDifference * MINUTES).getTime();

    this._interval = window.setInterval(() => {
      let now = new Date().getTime();

      let distance = endTime - now;

      let minute = Math.floor((distance % HOUR) / MINUTES);
      let second = Math.floor((distance % MINUTES) / SECONDS);

      if (distance === 0) {
        clearInterval(this._interval);
      } else {
        callback(minute, second);
      }
    }, DEFAULT_TIME_INTERVAL);
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
