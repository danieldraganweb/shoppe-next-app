import React from "react";
import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";
import SocialSVG from "./SocialSVG";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <Link href="/" className={styles.footerLinksItem}>
            <h4>Contact</h4>
          </Link>
          <Link href="/" className={styles.footerLinksItem}>
            <h4>FAQ</h4>
          </Link>
          <Link href="/" className={styles.footerLinksItem}>
            <h4>Shipping & Returns</h4>
          </Link>
          <Link href="/terms-of-service" className={styles.footerLinksItem}>
            <h4>Terms of Service</h4>
          </Link>
          <Link href="/" className={styles.footerLinksItem}>
            <h4>Privacy Policy</h4>
          </Link>
        </div>
        <div className={styles.footerSocial}>
          <label className={styles.emailPlaceholder}>
            Subscribe to the newsletter
          </label>
          <div className={styles.inputContainerBtn}>
            <input
              type="text"
              placeholder="Enter your email"
              className={styles.footerEmailInput}
            ></input>
            <div className={styles.submitBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="9"
                viewBox="0 0 25 9"
                fill="none"
              >
                <path
                  d="M0 4.99124V3.74124C0 3.39606 0.279908 3.11624 0.625193 3.11624H20.0062V0.616238C20.0097 0.366191 20.1619 0.142308 20.3933 0.0470931C20.6246 -0.0481216 20.8904 0.00366328 21.069 0.178738L24.8201 3.92874C25.0599 4.17601 25.0599 4.56897 24.8201 4.81624L21.069 8.56624C20.8887 8.74287 20.6199 8.79382 20.3875 8.69542C20.1551 8.59702 20.0047 8.36856 20.0062 8.11624V5.61624H0.625193C0.279908 5.61624 0 5.33642 0 4.99124Z"
                  fill="#707070"
                />
              </svg>
            </div>
          </div>
          <SocialSVG />
        </div>
      </footer>
      <div className={styles.footerLegal}>
        <p>© 2023 SHOPPE</p>
      </div>
    </>
  );
};

export default Footer;
