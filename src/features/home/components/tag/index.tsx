import { useCallback, useMemo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../../../../component/AppText";
import constants from "../../../../constants";
import { FontSize } from "../../../../constants/metrics";
import { TagType } from "../../../../states/zustand/types";
import useDailyResumeState from "../../../DailyResumePost/state/useDailyResumeState";

interface Props {
  type: TagType;
}

const Tag: React.FC<Props> = ({ type }) => {
  const { tags, toggleTag } = useDailyResumeState();

  const isSelected = useMemo(
    () => tags.some((tag) => tag === type),
    [type, tags]
  );

  const handleTagPress = useCallback(() => {
    console.log("pressed", type);
    toggleTag(type);
  }, [type]);

  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={handleTagPress}
    >
      <AppText fontSize={FontSize.s}>{type}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.LightTheme.secondary,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
    paddingRight: 20,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: constants.LightTheme.secondaryBorder,
  },
  selectedContainer: {
    backgroundColor: "red",
  },
});

export default Tag;
