import {PostsCard} from "../posts-card";
import styles from "./PostsList.module.scss";
export default function PostsList({posts} : {posts: Post[]}) {
  return (
    <div className={styles.postsContainer}>
    {posts?.map((post) => (
      <PostsCard post={post} key={post.id} />
    ))}
  </div>
  )
}
