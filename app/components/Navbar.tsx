import React from "react";
import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import CartSVG from "./CartSVG";
import SearchSVG from "./SearchSVG";
import ProfileSVG from "./ProfileSVG";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <header className={styles.header}>
          <h1>
            <span className={styles.headerAccentColor}>S</span>HOPPE
          </h1>
        </header>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLinkItem}>
            <h5>Shop</h5>
          </Link>
          <Link href="/blog" className={styles.navLinkItem}>
            <h5>Blog</h5>
          </Link>
          <Link href="/ourstory" className={styles.navLinkItem}>
            <h5>Our Story</h5>
          </Link>
        </div>
        <div>
          <p>|</p>
        </div>
        <div className={styles.svgContainer}>
          <Link href="/contact" className={styles.navLinkSVG}>
            <SearchSVG />
          </Link>
          <Link href="/cart" className={styles.navLinkSVG}>
            <CartSVG />
          </Link>
          <Link href="/checkout" className={styles.navLinkSVG}>
            <ProfileSVG />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
