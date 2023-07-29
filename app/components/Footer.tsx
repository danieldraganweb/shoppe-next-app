import React from "react";
import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";
import SocialSVG from "./SocialSVG";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          {/* <Link href="/" className={styles.footerLinksItem}>
            <h3>Home</h3>
          </Link> */}
          <Link href="/" className={styles.footerLinksItem}>
            <h3>Contact</h3>
          </Link>
          <Link href="/" className={styles.footerLinksItem}>
            <h3>FAQ</h3>
          </Link>
          <Link href="/" className={styles.footerLinksItem}>
            <h3>Shipping & Returns</h3>
          </Link>
          {/* <Link href="/terms-of-service">
            <h3>Terms of Service</h3>
          </Link> */}
          <Link href="/" className={styles.footerLinksItem}>
            <h3>Privacy Policy</h3>
          </Link>
        </div>
        <div className={styles.footerSocial}>
          <div className={styles.inputContainer}>
            <label className={styles.emailPlaceholder}>
              Subscribe to the newsletter
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className={styles.footerEmailInput}
            ></input>
            <SocialSVG />
          </div>
        </div>
      </footer>
      <div className={styles.footerLegal}>
        <p>© 2023 SHOPPE</p>
      </div>
    </>
  );
};

export default Footer;
