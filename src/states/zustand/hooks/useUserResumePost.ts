import { useCallback, useState } from "react";
import moment from "moment";
import useUserResumePostStore, {
  PostStateType,
} from "../stores/useUserResumePostStore";
import { PostTypeEnum } from "../types";

const useUserResumePost = () => {
  const state = useUserResumePostStore((state) => state);
  const [resumePost, setResumePost] = useState<PostStateType | null>(null);

  const getInstantPostsResumeFromDate = useCallback(
    (date: string) => {
      const month = moment(date).get("month");
      const year = moment(date).get("year");

      const posts = state.posts.filter((post) => {
        const postDay = moment(post.createdAt);
        const postMonth = postDay.get("month");
        const postYear = postDay.get("year");

        if (post.type === PostTypeEnum.RESUME) {
          setResumePost(post);
        }

        return (
          postMonth === month &&
          postYear === year &&
          post.type === PostTypeEnum.INSTAN
        );
      });

      return posts;
    },
    [state.posts]
  );

  return { ...state, getInstantPostsResumeFromDate, resumePost };
};

export default useUserResumePost;
