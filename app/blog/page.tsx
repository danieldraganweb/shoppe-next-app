"use client";
import React from "react";
import styles from "../styles/pages/blog.module.scss";
import { useState } from "react";
import { useBlogPosts } from "../hooks/useBlogPosts";
import Image from "next/image";

const Blog = () => {
  const { blogPosts } = useBlogPosts();
  const [loading, setLoading] = useState(true);
  console.log(blogPosts);

  return (
    <div className={styles["blog-container"]}>
      {blogPosts.map((blogPost) => (
        <div key={blogPost.id} className={styles.article}>
          <h2 className={styles["article-title"]}>{blogPost.fields?.Name}</h2>
          <p className={styles["article-date"]}>
            Published on {blogPost.fields?.createdTime}
          </p>
          <Image
            loading="lazy"
            src={
              blogPost.fields?.Image && blogPost.fields.Image.length > 0
                ? blogPost.fields.Image[0].url
                : ""
            }
            alt={blogPost.fields?.Name}
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
          <p className={styles["article-content"]}>
            {blogPost.fields?.Description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Blog;

// const Blog = () => {
//   return (
//     <div className={styles["blog-container"]}>
//       <h1>Blog</h1>
//       <div className={styles.article}>
//         <h2 className={styles["article-title"]}>
//           1. The Timeless Elegance of Pearls
//         </h2>
//         <p className={styles["article-date"]}>Published on July 31, 2023</p>
//         {/* <img src="pearl-necklace.jpg" alt="Pearl Necklace" className={styles["article-image"]} /> */}
//         <p className={styles["article-content"]}>
//           Pearls have been adorning women for centuries and continue to be a
//           symbol of timeless elegance. In this article, we explore the
//           fascinating history of pearls, their various types, and how to style
//           them to elevate any outfit. Whether you&rsquo;re attending a gala
//           event or simply seeking to add a touch of sophistication to your daily
//           look, pearls are the perfect choice for an exquisite and refined
//           appearance.
//         </p>
//       </div>

//       <div className={styles.article}>
//         <h2 className={styles["article-title"]}>
//           2. The Allure of Vintage Jewelry
//         </h2>
//         <p className={styles["article-date"]}>Published on August 15, 2023</p>
//         {/* <img src="vintage-jewelry.jpg" alt="Vintage Jewelry" className={styles["article-image"]} /> */}
//         <p className={styles["article-content"]}>
//           Vintage jewelry exudes a charm that transcends time. In this article,
//           we delve into the world of vintage treasures, exploring the eras that
//           gave birth to these exceptional pieces. From the Art Deco designs of
//           the 1920s to the glamorous Hollywood-inspired jewelry of the 1950s,
//           vintage pieces offer a unique allure that allows you to carry a piece
//           of history with you wherever you go. Discover the beauty of vintage
//           jewelry and how you can incorporate it into your modern-day style.
//         </p>
//       </div>

//       <div className={styles.article}>
//         <h2 className={styles["article-title"]}>
//           3. Unleashing Your Inner Diva with Statement Jewelry
//         </h2>
//         <p className={styles["article-date"]}>Published on September 5, 2023</p>
//         {/* <img src="statement-jewelry.jpg" alt="Statement Jewelry" className={styles["article-image"]} /> */}
//         <p className={styles["article-content"]}>
//           Want to make a bold fashion statement? Look no further than statement
//           jewelry. In this article, we explore the power of statement pieces to
//           transform any outfit from ordinary to extraordinary. From oversized
//           necklaces that demand attention to vibrant cocktail rings that exude
//           confidence, statement jewelry lets you express your personality and
//           style with flair. Unleash your inner diva and embrace the audacious
//           world of statement jewelry for a fashion-forward and empowering look.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Blog;
