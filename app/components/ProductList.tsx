"use client";
import React from "react";
import { useProducts } from "../hooks/useProducts";
import Image from "next/image";
import styles from "../styles/components/ProductList.module.scss";

export function ProductList() {
  const { products } = useProducts();

  return (
    <div className={styles.wrapper}>
      <section>
        {products.map((product) => (
          <div key={product.id} className={styles.gridContainer}>
            <Image
              src={product.fields?.Image[0].url}
              alt={product.fields?.Name}
              width={290}
              height={290}
            />
            <h3>{product?.fields?.Name}</h3>
            <p>{product.fields?.Price}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
