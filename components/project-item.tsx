export default function ProjectItem({ name, setShowModal, description }: any) {
  return (
    <>
      <div onClick={() => setShowModal()}>
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
