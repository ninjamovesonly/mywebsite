import { useAppContext } from "../context/state";

export default function Button({ label }: any) {
  const { theme }: any = useAppContext();

  return (
    <div className="btn-container">
      <button className={`btn-${theme} btn`}>{label}</button>
    </div>
  );
}
