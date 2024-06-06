import { getLikedPosts } from "@/api-calls/posts"
import Container from "@/components/container/Container";
import PostsCard from "@/components/posts-card";
import styles from "../(home)/Home.module.scss";

export default async function page() {
  const likedPosts = await getLikedPosts();
  return (
    <Container>
      <div className={styles.postsContainer}>
        {likedPosts?.map((post) => (
          <PostsCard post={post}  key={post.id} />
        ))}
      </div>
    </Container>
  )
}
