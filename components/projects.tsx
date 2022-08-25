import { useState } from 'react';
import { useAppContext } from '../context/state';
import { SelectedDataType } from '../types';
import MoreProjectDetailsModal from './more-project-details-modal';
import ProjectItem from './project-item';

export default function Projects() {
  const [selectedData, setSelectedData] = useState<SelectedDataType>({
    route: '',
    details: {
      jobTitle: '',
      companyName: '',
      from: '',
      to: '',
      months: '',
      jobDescription: '',
      screenshots: [],
    },
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {
    sharedState: { projects },
  } = useAppContext();

  return (
    <>
      {isModalOpen && (
        <MoreProjectDetailsModal
          selectedData={selectedData}
          closeModal={() => {
            setIsModalOpen(false);
            setSelectedData({
              route: '',
              details: {
                jobTitle: '',
                companyName: '',
                from: '',
                to: '',
                months: '',
                jobDescription: '',
                screenshots: [],
              },
            });
          }}
        />
      )}
      <div className={`projects-container`}>
        <p>
          <u>Projects & Experience</u>
        </p>
        {projects.map(({ name, route, description, details }: any) => {
          return (
            <ProjectItem
              key={name}
              name={name}
              description={description}
              openModal={() => {
                setIsModalOpen(true);
                setSelectedData({ route, details });
              }}
            />
          );
        })}
      </div>
    </>
  );
}
