"use client";

import Image from "next/image";
import styles from "./HeartButton.module.scss";
export default function HeartButton() {
  return (
    <div className={styles.heartButtonContainer}>
      <button className={styles.heartButton}>
        <Image
          src={"/icons/heart-linear.svg"}
          height={24}
          width={24}
          alt="heart-icon"
        />
      </button>
      <span className="">
        300
      </span>
    </div>
  );
}
