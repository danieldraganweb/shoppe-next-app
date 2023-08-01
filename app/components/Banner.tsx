"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useBanners } from "../hooks/useBanner";
import Image from "next/legacy/image";
import styles from "../styles/components/Banner.module.scss";
import { useMediaQuery } from "react-responsive";
import { Record } from "../types";
import Button from "./Button";

export function BannerHero() {
  const { banners } = useBanners();
  const [loading, setLoading] = useState(true);
  const isDesktopOrTablet = useMediaQuery({ minWidth: 501 });
  // const isMobile = useMediaQuery({ maxWidth: 500 });

  const [imagesMobile, setBannerMobile] = useState([] as Record[]);
  const [imagesDesktop, setBannerDesktop] = useState([] as Record[]);

  useEffect(() => {
    if (!banners) return;
    const bannerMobile = banners.filter(
      (banner: Record) => banner.fields?.Description === "Banner-Mobile"
    );
    setBannerMobile(bannerMobile);
    const bannerDesktop = banners.filter(
      (banner: Record) => banner.fields?.Description === "Banner-Desktop"
    );
    setBannerDesktop(bannerDesktop);
    setLoading(false);
  }, [banners]);

  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerText}>
        <h1>Plaine Gold Hoops</h1>
        <p>$68</p>
        <Button href="/products" text="View Product" />
      </div>
      {isDesktopOrTablet
        ? imagesDesktop.map((banner: Record) => (
            <div key={banner.id} className={styles.imgContainer}>
              <Image
                src={banner.fields?.Image[0].url}
                alt={banner.fields?.Name}
                width={banner.fields?.Image[0].width}
                height={banner.fields?.Image[0].height}
                objectFit="cover"
                layout="responsive"
                priority={true}
                style={{
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                }}
              />
            </div>
          ))
        : imagesMobile.map((banner: Record) => (
            <div key={banner.id} className={styles.imgContainer}>
              <Image
                src={banner.fields?.Image[0].url}
                alt={banner.fields?.Name}
                width={banner.fields?.Image[0].width}
                height={banner.fields?.Image[0].height}
                priority={true}
                layout="responsive"
                style={{
                  // boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  borderRadius: "0.2em",
                  padding: "0 0.5em 0 0.5em",
                }}
                // className={` ${styles["transition-opacity"]} ${
                //   styles["opacity-0"]
                // } ${styles["transition-timing-function"]} ${
                //   styles["duration-300"]
                // } ${styles["ease-in-out"]}
                //         ${
                //           loading ? styles["opacity-0"] : styles["opacity-100"]
                //         }`}
              />
            </div>
          ))}
    </div>
  );
}
