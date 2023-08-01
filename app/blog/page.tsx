"use client";
import React from "react";
import styles from "../styles/pages/blog.module.scss";
import { useState } from "react";
import { useBlogPosts } from "../hooks/useBlogPosts";
import Image from "next/legacy/image";
import { BlogPostRecord } from "../../app/types";

const Blog = () => {
  const { blogPosts } = useBlogPosts();
  // const [loading, setLoading] = useState(true);
  console.log(blogPosts);
  return (
    <div className={styles["blog-container"]}>
      <h1>Blog</h1>
      {blogPosts.map((post: BlogPostRecord) => (
        <div key={post.id} className={styles.article}>
          <Image
            loading="lazy"
            src={post.fields?.image[0].url}
            alt={post.fields?.name}
            width={post.fields?.image[0].width}
            height={post.fields?.image[0].height}
            // layout="responsive"
            style={{
              borderRadius: "0.5em",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          />
          <h2 className={styles["article-title"]}>{post.fields?.name}</h2>
          <p className={styles["article-date"]}>
            Published on {post.fields?.date}
          </p>
          <p className={styles["article-content"]}>
            {post.fields?.["blog-content"]}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Blog;
