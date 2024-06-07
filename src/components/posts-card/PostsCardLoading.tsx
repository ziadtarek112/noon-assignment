import Skeleton from "../skeleton";
import styles from "./PostsCard.module.scss";
export default function PostsCardLoading() {
  return (
    <div className={styles.postCard}>
    <div className={styles.user}>
      <Skeleton variant="avatar" />
      <Skeleton variant="username" />
    </div>

    <div>
      <div className={styles.imageContainer}>
        <Skeleton variant="image" />
      </div>
    </div>

    <div className={styles.postDataContainer}>
      <Skeleton variant="likes" />
      <Skeleton variant="description" />
      <div className={styles.hashtags}>
        {[...Array(3)].map((hashtag, index) => (
          <Skeleton key={index} variant="hashtags" />
        ))}
      </div>
      <Skeleton variant="comment" />
    </div>
  </div>
  )
}
