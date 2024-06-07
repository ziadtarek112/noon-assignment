import React from 'react'
import styles from "./Skeleton.module.scss";
type SkeletonProps = {
  variant: "image" | "description" | "image" | "hashtags" | "comment" | "username" | "avatar" | "likes";
};
export default function Skeleton({variant} : SkeletonProps) {
  return (
    <div className={`${styles.skeleton} ${styles[variant]}`}></div>
  )
}
