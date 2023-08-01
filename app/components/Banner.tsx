"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useBanners } from "../hooks/useBanner";
import Image from "next/legacy/image";
import styles from "../styles/components/Banner.module.scss";
import { useMediaQuery } from "react-responsive";
import { Record } from "../types";
import BannerHero from "./BannerHero";

export function Banner() {
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
      {isDesktopOrTablet
        ? imagesDesktop.map((banner: Record) => (
            <div key={banner.id} className={styles.imgContainer}>
              <Image
                src={banner.fields?.Image[0].url}
                alt={banner.fields?.Name}
                width={banner.fields?.Image[0].width}
                height={banner.fields?.Image[0].height}
                // layout="responsive"
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
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  borderRadius: "0.2em",
                  padding: "0 0.5em 0 0.5em",
                }}
              />
            </div>
          ))}
      <BannerHero />
    </div>
  );
}
