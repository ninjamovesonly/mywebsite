import { useAppContext } from "../context/state";

export default function Button({ label, link }: any) {
  const { theme }: any = useAppContext();

  return (
    <div className="btn-container">
      <button
        className={`btn-${theme} btn`}
        onClick={() => {
          window.open(`${link}`, "_blank")?.focus();
        }}
      >
        {label}
      </button>
    </div>
  );
}
