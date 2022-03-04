import Link from "next/link";
import { useAppContext } from "../context/state";
import ProjectItem from "./project-item";
import styles from "../styles/Home.module.css";

export default function Projects() {
  const {
    sharedState: { projects },
  }: any = useAppContext();

  return (
    <div className={styles["projects-container"]}>
      <h6>Practice Projects</h6>
      {projects.map(({ name, route, description }: any) => {
        return (
          <ProjectItem
            key={name}
            name={name}
            route={route}
            description={description}
          />
        );
      })}
    </div>
  );
}
