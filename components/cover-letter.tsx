import { useAppContext } from "../context/state";
import styles from "../styles/Home.module.css";

export default function CoverLetter() {
  const {
    sharedState: { coverLetter },
  }: any = useAppContext();

  return (
    <div className={`${styles["cover-letter-container"]} ic-second`}>
      <p>
        Chinedu <b>Prince</b> Abalogu
      </p>
      {coverLetter.split("\n").map((str: string) => (
        <p key={str}>{str}</p>
      ))}
      <a href="http://devstack.ng" target="_blank" rel="noreferrer">
        <b>
          <u>devstack.ng.</u>
        </b>
      </a>
    </div>
  );
}
