import moment from "moment";
import { useCallback } from "react";
import useUserResumePostStore from "../stores/useUserResumePostStore";
import { PostTypeEnum } from "../types";

const useUserResumePost = () => {
  const state = useUserResumePostStore((state) => state);

  const getInstantPostsResumeFromDate = useCallback(
    (date: string) => {
      const month = moment(date).get("month");
      const year = moment(date).get("year");

      console.log({ year, month });

      const posts = state.posts.filter((post) => {
        const postDay = moment(post.createdAt);
        const postMonth = postDay.get("month");
        const postYear = postDay.get("year");
        console.log({ post });

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

  return { ...state, getInstantPostsResumeFromDate };
};

export default useUserResumePost;
