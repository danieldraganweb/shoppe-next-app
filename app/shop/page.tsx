import styles from "../styles/pages/shop.module.scss";
import React from "react";
import Image from "next/image";
const Shop = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Shop Page</h1>
      </div>
      <div className={styles.container}>
        <h1>Coming soon!</h1>
      </div>
      <Image
        src="/our-story.jpg"
        alt="Coming Soon"
        width={500}
        height={750}
        className={styles["img"]}
      />
    </>
  );
};

export default Shop;
