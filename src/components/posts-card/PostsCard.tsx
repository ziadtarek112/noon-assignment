import Image from "next/image";
import HeartButton from "./heart-button/HeartButton";
import styles from "./PostsCard.module.scss";
export default function PostsCard() {
  return (
    <div className={styles.postCard}>
      <div className={styles.user}>
        <Image
          src={
            "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="user-image"
          height={24}
          width={24}
        />
        <span className="">Username</span>
      </div>

      <div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            alt="post-image"
            width={200}
            height={200}
            src={
              "https://images.unsplash.com/photo-1716538878686-38567b89b5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <HeartButton />
        </div>
      </div>

      <div className={styles.postDataContainer}>
        <p>Liked by <strong>Ziad</strong> and 299 others</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident aliquam ad soluta optio debitis! Repellendus repellat excepturi recusandae ipsa cupiditate odio quia, cum culpa sequi officia impedit molestiae saepe aperiam!</p>
        <div>
            <span>#Car</span>
            <span>#modern</span>
            <span>#abstract</span>
            <span>#luxury</span>
        </div>
        <p>30 comments</p>
      </div>
    </div>
  );
}
