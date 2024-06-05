import PostsCard from "@/components/posts-card/PostsCard";
import styles from "./Home.module.scss";
import Container from "@/components/container/container";
export default function Home() {
  return (
    <Container>
      <div className={styles.postsContainer}>
        {[...Array(10)].map((post, index) => (
          <PostsCard key={index} />
        ))}
      </div>
    </Container>
  );
}
