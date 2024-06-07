import { getLikedPosts } from "@/api-calls/posts"
import Container from "@/components/container/Container";
import {PostsList} from "@/components/posts-list";

export default async function page() {
  const likedPosts = await getLikedPosts();
  return (
    <Container>
      <PostsList posts={likedPosts} />
    </Container>
  )
}
