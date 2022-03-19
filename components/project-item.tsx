import Link from "next/link";

export default function ProjectItem({ name, route, description }: any) {
  return (
    <>
      <Link href={route} passHref>
        <div className={`project-item-container`}>
          <span>
            <b>{name}</b>
          </span>
          <span>{description}</span>
          <br />
        </div>
      </Link>
    </>
  );
}
