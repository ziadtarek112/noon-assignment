"use server";

import { cookies } from "next/headers";

export const getPosts = async () => {
  const likes = JSON.parse(cookies().get("likes")?.value ?? "[]");
  const response = await fetch("http://localhost:3000/api/posts", {
    next : { tags :  ['posts'] }
  });
  const rawPosts: Post[] = await response.json();
  const posts = rawPosts.map((post) => {
    const isLiked = likes.includes(post.id);

    return {
      ...post,
      likes: isLiked ? post.likes + 1 : post.likes,
      isLiked,
    };
  });
  return posts;
};

export const getLikedPosts = async () => {
    const allPosts = await getPosts();
    return allPosts.filter((post) => post.isLiked);
}

export const likePost = async (postId: string) => {
  if (!cookies().get("likes")?.value) {
    return [postId];
  }

  const likes: string[] = JSON.parse(cookies().get("likes")?.value ?? "[]");
  if (likes.includes(postId)) {
    return likes.filter((id) => id !== postId);
  } else {
    return [...likes, postId];
  }
};
