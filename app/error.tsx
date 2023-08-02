"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import styles from "./styles/error.module.scss";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.wrapper}>
      <h1>404 ERROR</h1>
      <h2>Something went wrong!</h2>
      <p>
        The page you are looking for could not be found. Please check the URL or
        navigate back to the homepage.
      </p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <button>
        <Link key="home" href="/" className={styles.navLinkItem}>
          Homepage
        </Link>
      </button>
    </div>
  );
}
