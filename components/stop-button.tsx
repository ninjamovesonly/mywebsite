import Image from "next/image";

const Button = ({ theme, handleClick }: any) => {
  return (
    <div className={`pomodoro-button-${theme}`} onClick={handleClick}>
      <Image
        alt="link to leetcode"
        src={`/${theme}/stop-button.svg`}
        width={22}
        height={24}
      />
      <span>Stop</span>
    </div>
  );
};

export default function StopPomodoroTimerButton({ theme, handleClick }: any) {
  return <Button theme={theme} handleClick={handleClick} />;
}
