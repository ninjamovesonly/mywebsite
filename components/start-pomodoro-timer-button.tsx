import Image from "next/image";
import { useAppContext } from "../context/state";

const Button = ({ theme, label }: any) => {
  return (
    <div className={`pomodoro-button-${theme}`}>
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

export default function StartPomodoroTimerButton({ label }: any) {
  const { theme }: any = useAppContext();

  return (
    // { theme && <Button />}
    <Button theme={theme} />
  );
}
