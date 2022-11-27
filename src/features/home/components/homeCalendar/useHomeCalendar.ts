import moment, { Moment } from "moment";
import { useMemo, useCallback, useState } from "react";
import { TDateRange } from "react-native-calendar-strip";
import useUserResumePost from "../../../../states/zustand/hooks/useUserResumePost";
import useHomeState from "../../state/useHomeState";

const useHomeCalendar = () => {
  const { changeDate } = useHomeState();
  const { posts } = useUserResumePost();

  const firstCreatedPostDate = useMemo(() => {
    const sortedPosts = posts.sort((aPost, bPost) => {
      const rightDate = moment(bPost.createdAt);

      const diff = moment(aPost.createdAt).diff(rightDate);

      return diff;
    });

    // default date is today
    const oldPost = sortedPosts[0]?.createdAt ?? moment();

    return oldPost;
  }, [posts]);

  const datesWhitelist: TDateRange[] = useMemo(() => {
    const start = moment(firstCreatedPostDate);
    const end = moment();

    return [
      {
        start,
        // first created post
        end,
      },
    ];
  }, [firstCreatedPostDate]);

  const handleDateChange = useCallback((date: Moment) => {
    changeDate(date.toISOString());
  }, []);

  return {
    datesWhitelist,
    handleDateChange,
  };
};

export default useHomeCalendar;
