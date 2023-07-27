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
            <h3>Home</h3>
          </Link>
          <Link href="/blog" className={styles.navLinkItem}>
            <h3>Blog</h3>
          </Link>
          <Link href="/ourstory" className={styles.navLinkItem}>
            <h3>Our Story</h3>
          </Link>
          <p>|</p>
          <Link href="/contact" className={styles.navLinkItem}>
            <h3>Search</h3>
          </Link>
          <Link href="/cart" className={styles.navLinkItem}>
            <h3>Cart</h3>
          </Link>
          <Link href="/checkout" className={styles.navLinkItem}>
            <h3>Profile</h3>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
