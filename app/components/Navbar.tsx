import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <Link href="/blog">
        <h1>Blog</h1>
      </Link>
      <Link href="/ourstory">
        <h1>Our Story</h1>
      </Link>
    </div>
  );
};

export default Navbar;
