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
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <button>
        <Link key="home" href="/" className={styles.navLinkItem}></Link>
      </button>
    </div>
  );
}
