export default function MoreProjectDetailsModal({
  selectedData,
  setShowModal,
}: any) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        background: "white",
        width: "100%",
        height: "100%",
        padding: "2em",
        zIndex: "5",
      }}
    >
      <p>{selectedData.modalDescription}</p>
      <a href={selectedData.route}>
        <u>Go to project</u>
      </a>{" "}
      <br />
      <a
        onClick={() => setShowModal()}
        style={{ color: "red", cursor: "pointer" }}
      >
        close x
      </a>
    </div>
  );
}
