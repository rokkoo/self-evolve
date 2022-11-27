import moment from "moment";
import { useMemo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import useUserResumePost from "../../../../states/zustand/hooks/useUserResumePost";
import {
  EmotionalStatusEnum,
  TagsEnum,
} from "../../../../states/zustand/types";
import DailyResume from "../dailyResume";
import InstantResume from "../instantResume";

const DailyContainer = () => {
  const { getPostResumeFromDate } = useUserResumePost();

  const instantPosts = useMemo(() => {
    const date = moment().toISOString();

    const posts = getPostResumeFromDate(date);

    return posts;
  }, [getPostResumeFromDate]);

  return (
    <View style={styles.container}>
      <DailyResume emotionalStatus={EmotionalStatusEnum.NEUTRAL} />

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
