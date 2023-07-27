import React from "react";
import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <header className={styles.header}>
          <h1>Shoppe</h1>
        </header>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLinkItem}>
            <h1>Home</h1>
          </Link>
          <Link href="/blog" className={styles.navLinkItem}>
            <h1>Blog</h1>
          </Link>
          <Link href="/ourstory" className={styles.navLinkItem}>
            <h1>Our Story</h1>
          </Link>
          <p>|</p>
          <Link href="/contact" className={styles.navLinkItem}>
            <h1>Search</h1>
          </Link>
          <Link href="/cart" className={styles.navLinkItem}>
            <h1>Cart</h1>
          </Link>
          <Link href="/checkout" className={styles.navLinkItem}>
            <h1>Profile</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
