import { getLikedPosts } from "@/api-calls/posts";
import Container from "@/components/container";
import { PostsList } from "@/components/posts-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noon Social - Liked Posts",
};

export default async function page() {
  const likedPosts = await getLikedPosts();
  return (
    <Container>
      <PostsList posts={likedPosts} />
    </Container>
  );
}
