import { useAppContext } from "../context/state";

export default function Button({ label }: any) {
  const { theme }: any = useAppContext();

  return (
    <div className="btn-container">
      <button
        className={`btn-${theme} btn`}
        onClick={() => {
          window
            .open(
              "https://drive.google.com/file/d/1hovw3HlbeyZMabPtEQNZ4XlyajS6axVm/view?usp=sharing",
              "_blank"
            )
            ?.focus();
        }}
      >
        {label}
      </button>
    </div>
  );
}
