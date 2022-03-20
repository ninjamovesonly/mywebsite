import toast, { Toaster } from "react-hot-toast";

export default function Support() {
  const handleClick = (e: any) => {
    e.preventDefault();

    toast("Still under development! Kindly check back tomorrow :)");
  };
  return (
    <div className="sml-support-container">
      <Toaster />
      <form onSubmit={handleClick}>
        <input placeholder="Name (optional)" />
        <input type="number" defaultValue={1000} placeholder="Amount" />
        <textarea placeholder="Say something nice.. (optional)"></textarea>
        <button type="submit">Show love ₦1000</button>
      </form>
    </div>
  );
}
