import Link from "next/link";

export default function ProjectItem({ name, route, description }: any) {
  return (
    <>
      <span>
        <b>{name}</b>
      </span>
      <span>
        <b>{description}</b>
      </span>
      <br />
    </>
  );
}
