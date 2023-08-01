// Purpose: Home page for the application

import styles from "./page.module.scss";
import { ProductList } from "./components/ProductList";
import { Banner } from "./components/Banner";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div className={styles.titleContainer}>
        <h3>Shop The Latest</h3>
        <Link href="/products">
          <h5>View All</h5>
        </Link>
      </div>
      <ProductList />
    </main>
  );
}

// Path: app\page.module.scss
