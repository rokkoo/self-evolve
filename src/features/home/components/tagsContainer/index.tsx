import { useMemo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import constants from "../../../../constants";
import { TagsEnum } from "../../../../states/zustand/types";
import useDailyResumeState from "../../../DailyResumePost/state/useDailyResumeState";
import Tag from "../tag";

interface Props {}

const TagsContainer: React.FC<Props> = (props) => {
  const { tags } = useDailyResumeState();

  const availableTags = useMemo(() => {
    const tags = Object.values(TagsEnum);

    return tags;
  }, []);

  const itemList = useMemo(() => {
    return availableTags.map((item, index) => {
      return <Tag key={index} type={item} />;
    });
  }, [tags]);

  return <View style={styles.container}>{itemList}</View>;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    margin: 10,
    backgroundColor: "#D9CACA",
    borderColor: constants.LightTheme.last,
    padding: 5,
    borderRadius: 10,
  },
});

export default TagsContainer;
