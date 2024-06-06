import PostsCard from "@/components/posts-card";
import styles from "./Home.module.scss";
import Container from "@/components/container";
import { getPosts } from "@/api-calls/posts";
export default async function Home() {
  const posts : Post[] = await getPosts();

  
  return (
    <Container>
      <div className={styles.postsContainer}>
        {posts?.map((post) => (
          <PostsCard post={post}  key={post.id} />
        ))}
      </div>
    </Container>
  );
}
