export default function Support() {
  return (
    <div className="sml-support-container">
      <form onSubmit={() => console.log("submitted")}>
        <input placeholder="Name (optional)" />
        <input
          type="number"
          defaultValue={1000}
          placeholder="Amount"
          required
        />
        <textarea
          required
          placeholder="Say something nice.. (optional)"
        ></textarea>
        <button type="submit">Show love ₦1000</button>
      </form>
    </div>
  );
}
