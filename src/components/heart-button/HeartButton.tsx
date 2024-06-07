import Image from "next/image";
import styles from "./HeartButton.module.scss";
import { likePost } from "@/api-calls/posts";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

type HeartButtonProps = {
  postId: string;
  isLiked: boolean;
  likes: number;
};

export default function HeartButton({
  postId,
  isLiked,
  likes,
}: HeartButtonProps) {
  const handleLike = async () => {
    "use server";

    const data = await likePost(postId);
    cookies().set("likes", JSON.stringify(data));
    revalidateTag("posts");
  };

  return (
    <form action={handleLike} className={styles.heartButtonContainer}>
      <button type="submit" className={styles.heartButton}>
        <Image
          src={`/icons/heart-${isLiked ? "bold" : "linear"}.svg`}
          height={24}
          width={24}
          alt="heart-icon"
        />
      </button>
      <span className="">{likes}</span>
    </form>
  );
}
