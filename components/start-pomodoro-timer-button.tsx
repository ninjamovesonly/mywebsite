import Image from "next/image";
import { PomodoroTimerButtonProps } from "../types/pomodoro-timer";

const Button = ({ theme, label, handleClick }: PomodoroTimerButtonProps) => {
  return (
    <div className={`pomodoro-button-${theme}`} onClick={handleClick}>
      <Image
        alt="link to leetcode"
        src={`/${theme}/play-button.svg`}
        width={22}
        height={24}
      />
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
