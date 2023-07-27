import React from "react";
import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <Link href="/" className={styles.footerLinksItem}>
          <h3>Home</h3>
        </Link>
        <Link href="/" className={styles.footerLinksItem}>
          <h3>Contact</h3>
        </Link>
        <Link href="/" className={styles.footerLinksItem}>
          <h3>FAQ</h3>
        </Link>
        <Link href="/" className={styles.footerLinksItem}>
          <h3>Terms</h3>
        </Link>

        <Link href="/" className={styles.footerLinksItem}>
          <h3>Privacy</h3>
        </Link>

        <Link href="/" className={styles.footerLinksItem}>
          <h3>Shipping</h3>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
