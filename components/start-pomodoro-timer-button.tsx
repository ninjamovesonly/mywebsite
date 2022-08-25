import Image from 'next/image';
import { PomodoroTimerButtonProps } from '../types';
import { POMODORO_TIME_LABELS } from '../lib/consts';

const Button = ({ theme, label, handleClick }: PomodoroTimerButtonProps) => {
  return (
    <div className={`pomodoro-button-${theme}`} onClick={handleClick}>
      {(label === POMODORO_TIME_LABELS.START_TO_FOCUS ||
        label === POMODORO_TIME_LABELS.CONTINUE) && (
        <Image
          alt="play button"
          src={`/${theme}/play-button.svg`}
          width={22}
          height={24}
        />
      )}

      {label === POMODORO_TIME_LABELS.PAUSE && (
        <Image
          alt="pause button"
          src={`/${theme}/pause-button.svg`}
          width={22}
          height={24}
        />
      )}

      <span>{label}</span>
    </div>
  );
};

export default function StartPomodoroTimerButton({
  theme,
  label,
  handleClick,
}: PomodoroTimerButtonProps) {
  return <Button theme={theme} label={label} handleClick={handleClick} />;
}
