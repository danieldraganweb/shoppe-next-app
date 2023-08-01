import React from "react";
import styles from "../styles/pages/ourstory.module.scss";
import Image from "next/legacy/image";

const OurStory = () => {
  return (
    <div className={styles["our-story-container"]}>
      {/* <h1 className={styles["our-story-title"]}>SHOPPE</h1> */}
      <h1 className={styles["our-story-title"]}>Our Story</h1>
      <div className={styles["our-story-content"]}>
        <h2 className={styles["section-title"]}>
          Crafting Magic, One Piece at a Time
        </h2>
        <p className={styles["section-paragraph"]}>
          Our journey began with a simple dream - to create an online haven for
          jewelry enthusiasts, a place where the allure of craftsmanship meets
          the brilliance of design. Today, we stand proudly as a haven for
          elegance, sophistication, and timeless beauty.
        </p>
        <h2 className={styles["section-title"]}>
          Celebrating Diversity, Embracing Individuality
        </h2>
        <p className={styles["section-paragraph"]}>
          At Shoppe, we understand that beauty comes in all shapes, sizes, and
          forms. Our extensive range of jewelry celebrates diversity, offering a
          delightful array of designs that cater to every taste and style.
          Whether you&rsquo;re seeking a statement piece that commands attention
          or a subtle charm that whispers elegance, our collection is a
          testament to the vastness of beauty that surrounds us.
        </p>
        <h2 className={styles["section-title"]}>
          Ethically Sourced, Forever Cherished
        </h2>
        <p className={styles["section-paragraph"]}>
          With a deep reverence for our planet and its resources, we are
          committed to sourcing our materials ethically and responsibly. Our
          gemstones are procured from reputable sources, and our metals are
          carefully selected to ensure minimal environmental impact. We believe
          in creating treasures that not only shine on the outside but also
          carry the glow of a clear conscience.
        </p>
        <h2 className={styles["section-title"]}>
          Embracing Moments, Creating Memories
        </h2>
        <p className={styles["section-paragraph"]}>
          Jewelry is more than mere adornment; it&rsquo;s an expression of
          emotions, a reflection of cherished memories. We feel privileged to be
          part of your journey, be it celebrating milestones, expressing love,
          or simply adding a touch of elegance to your everyday life. At Shoppe,
          we take pride in crafting pieces that become an integral part of your
          story - each design etching a beautiful memory in the tapestry of your
          life.
        </p>
        <h2 className={styles["section-title"]}>Our Promise to You</h2>
        <p className={styles["section-paragraph"]}>
          As you explore Shoppe, we want you to experience the joy of
          discovering a treasure trove filled with stories waiting to be shared.
          From the moment you set foot on our website to the day your handpicked
          piece arrives at your doorstep, we promise to deliver nothing short of
          excellence. Our dedication to unparalleled customer service and our
          passion for exquisite jewelry is a promise that you can cherish for a
          lifetime.
        </p>
        <h2 className={styles["section-title"]}>
          Thank You for Being Part of Our Story
        </h2>
        <p className={styles["section-paragraph"]}>
          Our journey at Shoppe continues to flourish, inspired by the support
          and love of our cherished customers. Together, we are creating a
          legacy of beauty, elegance, and wonder. Thank you for being a part of
          our story and allowing us to be a part of yours. We invite you to
          explore the world of Shoppe, where every piece shines with a
          brilliance that resonates from the heart.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
