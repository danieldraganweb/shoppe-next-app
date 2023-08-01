"use client";
import React from "react";
import { useProducts } from "../hooks/useProducts";
import Image from "next/image";
import styles from "../styles/components/ProductList.module.scss";
import { useState } from "react";

export function ProductList() {
  const { products } = useProducts();
  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <div key={product.id} className={styles.gridContainer}>
          <Image
            loading="lazy"
            src={product.fields?.Image[0].url}
            alt={product.fields?.Name}
            width={370}
            height={370}
            layout="responsive"
            style={{
              borderRadius: "0.5em",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
            className={` ${styles["transition-opacity"]} ${
              styles["opacity-0"]
            } ${styles["transition-timing-function"]} ${
              styles["duration-300"]
            } ${styles["ease-in-out"]}
                    ${loading ? styles["opacity-0"] : styles["opacity-100"]}`}
            onLoadingComplete={(src) =>
              src.classList.remove(styles["opacity-0"])
            }
          />
          <div className={styles.description}>
            <h3>{product?.fields?.Name}</h3>
            <p>${product.fields?.Price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
