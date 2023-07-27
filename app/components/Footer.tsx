import React from "react";
import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <Link href="/" className={styles.footerLinksItem}>
          <h1>Home</h1>
        </Link>
        <Link href="/blog" className={styles.footerLinksItem}>
          <h1>Blog</h1>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
