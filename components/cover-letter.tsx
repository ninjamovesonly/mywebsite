import { useAppContext } from "../context/state";

export default function CoverLetter() {
  const {
    sharedState: { coverLetter },
  }: any = useAppContext();

  return (
    <>
      <p>{coverLetter} hola</p>
    </>
  );
}
