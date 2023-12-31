import styles from "../styles/pages/shop.module.scss";
import React from "react";
import Image from "next/legacy/image";
const Shop = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Shop Page</h1>
      </div>
      <div className={styles.container}>
        <h1>Coming soon!</h1>
      </div>
      <div className={styles["img-container"]}>
        <Image
          src="/our-story.jpg"
          alt="Coming Soon"
          width={500}
          height={750}
          className={styles["img"]}
          priority={true}
          style={{
            borderRadius: "10px",
          }}
          layout="responsive"
        />
      </div>
    </>
  );
};

export default Shop;
