import Image from "next/image";
import HeartButton from "../heart-button";
import styles from "./PostsCard.module.scss";

export default function PostsCard({ post }: { post: Post }) {
  return (
    <div className={styles.postCard}>
      <div className={styles.user}>
        <Image src={post.userImage} alt="user-image" height={24} width={24} />
        <span className="">{post.userName}</span>
      </div>

      <div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            alt="post-image"
            width={200}
            height={200}
            src={post.image}
          />
          <HeartButton  isLiked = {post.isLiked} postId={post.id} likes={post.likes} />
        </div>
      </div>

      <div className={styles.postDataContainer}>
        <p>
          Liked by <strong>{post.firstLike}</strong> and {post.likes - 1} others
        </p>
        <p>{post.description}</p>
        <div className={styles.hashtags}>
          {post.hashtags.map((hashtag, index) => (
            <span key={index}>{hashtag}</span>
          ))}
        </div>
        <p>{post.comments} comments</p>
      </div>
    </div>
  );
}
