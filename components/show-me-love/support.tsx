export default function Support() {
  return (
    <div>
      <form onSubmit={() => console.log("submitted")}>
        <input placeholder="Name (optional)" required />
        <textarea required>Say something nice.. (optional)</textarea>
        <button type="submit">Show love ₦1000</button>
      </form>
    </div>
  );
}
