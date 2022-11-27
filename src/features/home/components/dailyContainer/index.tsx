import moment from "moment";
import { useMemo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import useUserResumePost from "../../../../states/zustand/hooks/useUserResumePost";
import useHomeState from "../../state/useHomeState";
import DailyResume from "../dailyResume";
import InstantResume from "../instantResume";

const DailyContainer = () => {
  const { homeDate } = useHomeState();
  const { getInstantPostsResumeFromDate, resumePost } = useUserResumePost();

  const instantPosts = useMemo(() => {
    const date = homeDate ?? moment().toISOString();
    const posts = getInstantPostsResumeFromDate(date);

    return posts;
  }, [getInstantPostsResumeFromDate, homeDate]);

  const renderResumePost = useCallback(() => {
    if (!resumePost) return null;

    return <DailyResume emotionalStatus={resumePost.emotion} />;
  }, [resumePost]);

  return (
    <View style={styles.container}>
      {renderResumePost()}

      <FlatList
        data={instantPosts}
        renderItem={({ item }) => {
          return (
            <InstantResume
              key={item.id}
              text={item.note}
              createdAt={item.createdAt}
              emotionalStatus={item.emotion}
              tags={item.tags}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    // alignItems: "center",
    // flexDirection: "column",
    // justifyContent: "space-evenly",
    width: "100%",
  },
});

export default DailyContainer;
