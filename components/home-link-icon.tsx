import React from "react";
import Image from "next/image";
import Link from "next/link";

// const CustomComponent = React.forwardRef(function CustomComponent(props, ref) {
//   return <div />;
// });

export default function HomeLinkIcon() {
  return (
    <>
      <Link href="/" passHref>
        <Image alt="home icon" src={`/homeicon.svg`} width={90} height={90} />
      </Link>
    </>
  );
}
