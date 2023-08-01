import React from "react";
import styles from "../styles/components/BannerHero.module.scss";
import Button from "./Button";

import { FC } from "react";

const BannerHero: React.FC = () => {
  return (
    <div className={styles.bannerText}>
      <h1>Plaine Gold Hoops</h1>
      <p>$68</p>
      <Button href="/products" text="View Product" />
    </div>
  );
};

export default BannerHero;
