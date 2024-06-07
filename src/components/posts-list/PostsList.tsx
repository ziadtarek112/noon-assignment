import { PostsCard } from "@/components/posts-card";
import styles from "./PostsList.module.scss";
import Image from "next/image";

export default function PostsList({ posts }: { posts: Post[] }) {
  if (posts.length === 0)
    return (
      <div className={styles.noPosts}>
        <Image
          src={"/images/empty2.svg"}
          height={400}
          width={600}
          alt="empty-list"
        />
        <h3>No Liked Posts</h3>
      </div>
    );

  return (
    <div className={styles.postsContainer}>
      {posts?.map((post) => (
        <PostsCard post={post} key={post.id} />
      ))}
    </div>
  );
}
