import Image from "next/image";
import styles from "./page.module.scss";
import { ProductList } from "./components/ProductList";
import { BannerHero } from "./components/Banner";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <BannerHero />
      <div className={styles.titleContainer}>
        <h1>Shop The Latest</h1>
        <Link href="/products">
          <h1>View All</h1>
        </Link>
      </div>
      <ProductList />
    </main>
  );
}
