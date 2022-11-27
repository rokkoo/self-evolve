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
      const day = moment(date).get("day");
      const month = moment(date).get("month");
      const year = moment(date).get("year");

      const posts = state.posts.filter((post) => {
        const postDate = moment(post.createdAt);
        const postDay = postDate.get("day");
        const postMonth = postDate.get("month");
        const postYear = postDate.get("year");

        const isDatePost =
          postDay === day && postMonth === month && postYear === year;

        if (isDatePost && post.type === PostTypeEnum.RESUME) {
          setResumePost(post);
        }

        return isDatePost && post.type === PostTypeEnum.INSTAN;
      });

      return posts;
    },
    [state.posts]
  );

  return { ...state, getInstantPostsResumeFromDate, resumePost };
};

export default useUserResumePost;
