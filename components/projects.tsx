import { useAppContext } from "../context/state";
import ProjectItem from "./project-item";

export default function Projects() {
  const {
    sharedState: { projects },
  }: any = useAppContext();

  return (
    <div className={`projects-container`}>
      <p>
        <u>Practice Projects</u>
      </p>
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
