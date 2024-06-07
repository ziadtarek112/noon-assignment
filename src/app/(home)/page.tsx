import Container from "@/components/container";
import { getPosts } from "@/api-calls/posts";
import { PostsList } from "@/components/posts-list";

export default async function Home() {
  const posts: Post[] = await getPosts();
  return (
    <Container>
      <PostsList posts={posts} />
    </Container>
  );
}
