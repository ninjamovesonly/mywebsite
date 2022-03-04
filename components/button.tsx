import { useAppContext } from "../context/state";

export default function Button({ label }: any) {
  const { theme }: any = useAppContext();

  return (
    <>
      <button className={theme}>{label}</button>
    </>
  );
}
