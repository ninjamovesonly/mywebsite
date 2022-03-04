import Image from "next/image";
import { useAppContext } from "../context/state";
import styles from "../styles/Home.module.css";

export default function StartPomodoroTimerButton() {
  const { theme }: any = useAppContext();

  return (
    <div>
      <Image
        alt="link to leetcode"
        src={`/${theme}/play-button.svg`}
        width={22}
        height={24}
      />
      <span>Start to Focus</span>
    </div>
  );
}
