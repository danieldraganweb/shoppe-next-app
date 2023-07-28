import styles from "../styles/components/CartSVG.module.scss";
import React from "react";

export default function CartSVG() {
  return (
    <div className={styles.svgContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
      >
        <path
          d="M6.76598 13.5765H6.76694C6.76774 13.5765 6.76854 13.5763 6.76934 13.5763H17.9238C18.1984 13.5763 18.4399 13.3941 18.5153 13.1301L20.9763 4.51681C21.0293 4.33112 20.9921 4.13148 20.876 3.97736C20.7597 3.82323 20.5778 3.73254 20.3848 3.73254H5.34709L4.90729 1.75338C4.84465 1.47188 4.59503 1.27161 4.30664 1.27161H0.615234C0.275413 1.27161 0 1.54702 0 1.88684C0 2.22666 0.275413 2.50208 0.615234 2.50208H3.81317C3.89104 2.85279 5.91779 11.9733 6.03442 12.498C5.38058 12.7823 4.92187 13.4342 4.92187 14.1915C4.92187 15.2092 5.74988 16.0372 6.76758 16.0372H17.9238C18.2636 16.0372 18.5391 15.7618 18.5391 15.422C18.5391 15.0822 18.2636 14.8068 17.9238 14.8068H6.76758C6.4284 14.8068 6.15234 14.5307 6.15234 14.1915C6.15234 13.8528 6.42744 13.5773 6.76598 13.5765ZM19.5691 4.96301L17.4597 12.3458H7.26105L5.62042 4.96301H19.5691Z"
          fill="black"
        />
        <path
          d="M6.15234 17.8827C6.15234 18.9004 6.98035 19.7284 7.99805 19.7284C9.01575 19.7284 9.84375 18.9004 9.84375 17.8827C9.84375 16.865 9.01575 16.037 7.99805 16.037C6.98035 16.037 6.15234 16.865 6.15234 17.8827ZM7.99805 17.2675C8.33723 17.2675 8.61328 17.5435 8.61328 17.8827C8.61328 18.2219 8.33723 18.4979 7.99805 18.4979C7.65887 18.4979 7.38281 18.2219 7.38281 17.8827C7.38281 17.5435 7.65887 17.2675 7.99805 17.2675Z"
          fill="black"
        />
        <path
          d="M14.8476 17.8827C14.8476 18.9004 15.6756 19.7284 16.6933 19.7284C17.711 19.7284 18.539 18.9004 18.539 17.8827C18.539 16.865 17.711 16.037 16.6933 16.037C15.6756 16.037 14.8476 16.865 14.8476 17.8827ZM16.6933 17.2675C17.0325 17.2675 17.3086 17.5435 17.3086 17.8827C17.3086 18.2219 17.0325 18.4979 16.6933 18.4979C16.3541 18.4979 16.0781 18.2219 16.0781 17.8827C16.0781 17.5435 16.3541 17.2675 16.6933 17.2675Z"
          fill="black"
        />
      </svg>
    </div>
  );
}
