import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <Link href="/blog">
        <h1>Blog</h1>
      </Link>
    </div>
  );
};

export default Footer;
