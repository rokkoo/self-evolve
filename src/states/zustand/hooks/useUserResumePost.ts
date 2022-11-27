import moment from "moment";
import { useCallback } from "react";
import useUserResumePostStore from "../stores/useUserResumePostStore";

const useUserResumePost = () => {
  const state = useUserResumePostStore((state) => state);

  const getPostResumeFromDate = useCallback(
    (date: string) => {
      const month = moment(date).get("month");
      const year = moment(date).get("year");

      console.log({ year, month });

      const posts = state.posts.filter((post) => {
        const postDay = moment(post.createdAt);
        const postMonth = postDay.get("month");
        const postYear = postDay.get("year");

        if (postMonth === month && postYear === year) {
          return true;
        }

        return false;
      });

      return posts;
    },
    [state.posts]
  );

  return { ...state, getPostResumeFromDate };
};

export default useUserResumePost;
