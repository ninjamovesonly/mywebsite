import Link from "next/link";

export default function ProfileFooter() {
  return (
    <footer className="sml-footer">
      <Link href="/showmelove" passHref>
        <span>
          create my show<b>me</b>love page
        </span>
      </Link>
    </footer>
  );
}
