import React from "react";
import Link from "next/link";

function Button(props: { href: string; text: string }) {
  const { href, text } = props;

  return (
    <div>
      <button>
        <Link href={props.href}>{props.text}</Link>
      </button>
    </div>
  );
}

export default Button;
