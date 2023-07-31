"use client";
import React from "react";
import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import CartSVG from "./CartSVG";
import SearchSVG from "./SearchSVG";
import ProfileSVG from "./ProfileSVG";
import { UrlObject } from "url";

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
            <div className={styles.searchBarContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.24826 8.67L11.9144 11.3957C12.0335 11.531 12.0276 11.738 11.9011 11.8659L11.4345 12.3429C11.3719 12.4074 11.2868 12.4437 11.1979 12.4437C11.109 12.4437 11.0238 12.4074 10.9613 12.3429L8.29511 9.6172C8.22136 9.54174 8.15444 9.45964 8.09514 9.37188L7.59524 8.69044C6.7681 9.3657 5.74095 9.73336 4.68245 9.73304C2.50127 9.74078 0.6059 8.20253 0.118463 6.02899C-0.368974 3.85544 0.681608 1.62668 2.64823 0.662194C4.61486 -0.302289 6.97267 0.254912 8.32576 2.00392C9.67886 3.75292 9.66613 6.22695 8.29511 7.9613L8.96165 8.4315C9.06574 8.49961 9.1619 8.57962 9.24826 8.67ZM1.3498 4.96281C1.3498 6.84455 2.84191 8.37 4.68251 8.37C5.5664 8.37 6.41409 8.01103 7.03909 7.37206C7.66409 6.73309 8.01522 5.86645 8.01522 4.96281C8.01522 3.08108 6.52311 1.55563 4.68251 1.55563C2.84191 1.55563 1.3498 3.08108 1.3498 4.96281Z"
                  fill="#707070"
                />
              </svg>
              <input
                className={styles.searchInput}
                type="search"
                placeholder="Search"
              />
            </div>
          </nav>
        </main>
      </div>
    </>
  );
};

export default Navbar;
