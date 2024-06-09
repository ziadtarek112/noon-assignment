"use server";

import { cookies } from "next/headers";

/***
 * getPosts gets all posts from the server then adds a like property to each post and returns the final value.
 * @returns {Promise<Post[]>} - An array of posts with the like property added.
 */
export const getPosts = async () => {
  const likes = JSON.parse(cookies().get("likes")?.value ?? "[]");
  const response = await fetch("http://localhost:3000/api/posts", {
    cache: "force-cache",
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

/***
 * getLikedPosts gets all posts from the server then filters out the posts that are liked and returns the final value.
 * @returns {Promise<Post[]>} - An array of posts that are liked.
 */
export const getLikedPosts = async () => {
  const allPosts = await getPosts();
  return allPosts.filter((post) => post.isLiked);
};

/***
 * likePost adds or removes a like from a post. depending on the following conditions:
 * if there is no likes cookie, it will add the post id to the likes cookie.
 * if the post id is already in the likes cookie, it will remove the post id from the likes cookie.
 * if the post id is not in the likes cookie, it will add the post id to the likes cookie.
 * @param {string} postId - The id of the post to like.
 * @returns {Promise<string[]>} - An array of post ids that are liked.
 */
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
