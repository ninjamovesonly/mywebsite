import HeaderContainer from "./header";
import FooterContainer from "./footer";
import PomodoroTimer from "./pomodoro-timer";

export default function Pomodoro() {
  const page = "others";

  return (
    <>
      <HeaderContainer />
      <PomodoroTimer />
      <FooterContainer page={page} />
    </>
  );
}
