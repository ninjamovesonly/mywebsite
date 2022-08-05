import { useState } from "react";
import { useAppContext } from "../context/state";
import MoreProjectDetailsModal from "./more-project-details-modal";
import ProjectItem from "./project-item";

export default function Projects() {
  const [selectedData, setSelectedData] = useState<{
    modalDescription: string;
    route: string;
  }>({ modalDescription: "", route: "" });
  const [showModal, setShowModal] = useState<string>("");

  const {
    sharedState: { projects },
  } = useAppContext();

  return (
    <>
      {showModal && selectedData.modalDescription && selectedData.route && (
        <MoreProjectDetailsModal
          selectedData={selectedData}
          setShowModal={() => {
            setShowModal("");
            setSelectedData({ modalDescription: "", route: "" });
          }}
        />
      )}
      <div className={`projects-container`}>
        <p>
          <u>Projects</u>
        </p>
        {projects.map(({ name, route, description, modalDescription }: any) => {
          return (
            <ProjectItem
              key={name}
              name={name}
              description={description}
              setShowModal={() => {
                setShowModal(modalDescription);
                setSelectedData({ modalDescription, route });
              }}
            />
          );
        })}
      </div>
    </>
  );
}
