import { useState } from 'react';
import { useAppContext } from '../context/state';
import MoreProjectDetailsModal from './more-project-details-modal';
import ProjectItem from './project-item';

export default function Projects() {
  const [selectedData, setSelectedData] = useState<{
    route: string;
    details: {
      jobTitle: string;
      companyName: string;
      from: string;
      to: string;
      months: string;
      jobDescription: string;
      screenshots: string[];
    };
  }>({
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
      {isModalOpen && selectedData.details && selectedData.route && (
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
