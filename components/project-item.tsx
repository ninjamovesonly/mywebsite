export default function ProjectItem({ name, openModal, description }: any) {
  return (
    <>
      <div onClick={() => openModal()}>
        <div className={`project-item-container`}>
          <span>
            <b>{name}</b>
          </span>
          <span>{description}</span>
          <br />
        </div>
      </div>
    </>
  );
}
