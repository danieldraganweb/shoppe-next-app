"use client";
import React from "react";
import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import CartSVG from "./CartSVG";
import SearchSVG from "./SearchSVG";
import ProfileSVG from "./ProfileSVG";
import { UrlObject } from "url";
import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
  const url: UrlObject = { pathname: "/" };
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <nav className={styles.navbar}>
            <header className={styles.header}>
              <Link href={url}>
                <h1>SHOPPE</h1>
              </Link>
            </header>
            <div className={styles.burgerMenuContainer}>
              <div className={styles["mobile-cart"]}>
                <CartSVG />
              </div>
              <div className={styles.burgerMenu}>
                <button
                  className={styles.burgerMenuButton}
                  onClick={toggleMenu}
                  aria-label="Toggle Menu"
                  aria-expanded={menuOpen ? "true" : "false"}
                >
                  <svg
                    fill="var(--button-color)"
                    className={styles.hamburger}
                    viewBox="0 0 90 90"
                    width="22"
                  >
                    <rect
                      className={styles.lineTop}
                      width="88"
                      height="10"
                      x="1"
                      y="10"
                      rx="5"
                    />
                    <rect
                      className={styles.lineMiddle}
                      width="88"
                      height="10"
                      x="1"
                      y="40"
                      rx="5"
                    />
                    <rect
                      className={styles.lineBottom}
                      width="88"
                      height="10"
                      x="1"
                      y="70"
                      rx="5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <ul
              className={`${styles.navLinks} ${
                menuOpen ? styles.open : styles.closed
              }`}
            >
              <li className={styles.navLinkItem}>
                <Link
                  key="shop"
                  href="/shop"
                  className={styles.navLinkItem}
                  onClick={() => setMenuOpen(false)}
                >
                  <h5>Shop</h5>
                </Link>
              </li>
              <li className={styles.navLinkItem}>
                <Link
                  key="blog"
                  href="/blog"
                  className={styles.navLinkItem}
                  onClick={() => setMenuOpen(false)}
                >
                  <h5>Blog</h5>
                </Link>
              </li>
              <li className={styles.navLinkItem}>
                <Link
                  key="ourstory"
                  href="/ourstory"
                  className={styles.navLinkItem}
                  onClick={() => setMenuOpen(false)}
                >
                  <h5>Our Story</h5>
                </Link>
              </li>
              <li className={styles.navLinkItem}>
                <div>
                  <p>|</p>
                </div>
              </li>
              <div className={styles.svgContainer}>
                <li>
                  <Link
                    key="search"
                    href="/search"
                    className={styles.navLinkSVG1}
                    onClick={() => setMenuOpen(false)}
                  >
                    <SearchSVG />
                  </Link>
                </li>
                <li>
                  <Link
                    key="cart"
                    href="/cart"
                    className={styles.navLinkSVG2}
                    onClick={() => setMenuOpen(false)}
                  >
                    <CartSVG />
                  </Link>
                </li>
                <li>
                  <Link
                    key=""
                    href="/checkout"
                    className={styles.navLinkSVG3}
                    onClick={() => setMenuOpen(false)}
                  >
                    <ProfileSVG />
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </main>
      </div>
      <div>
        <SearchBar />
      </div>
    </>
  );
};

export default Navbar;
