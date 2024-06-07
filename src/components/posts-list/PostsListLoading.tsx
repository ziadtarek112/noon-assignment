import Container from "@/components/container";
import styles from "./PostsList.module.scss";
import { PostsCardLoading } from "@/components/posts-card";

export default function PostsListLoading() {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <Container key={index}>
          <div className={styles.postsContainer}>
            <PostsCardLoading />
          </div>
        </Container>
      ))}
    </>
  );
}
