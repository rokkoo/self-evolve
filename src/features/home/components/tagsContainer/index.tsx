import { useMemo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import constants from "../../../../constants";
import { TagType } from "../../../../states/zustand/types";
import Tag from "../tag";

interface Props {
  tags: TagType[];
  onTagPress?: (tag: TagType) => void;
  selectedTags?: TagType[];
}

const TagsContainer: React.FC<Props> = ({ tags, onTagPress, selectedTags }) => {
  console.log({ selectedTags });

  const isSelected = useCallback(
    (type: TagType) => {
      if (!selectedTags) return false;

      return selectedTags.some((tag) => tag === type);
    },
    [selectedTags]
  );

  if (tags.length <= 0) return null;

  const itemList = useMemo(() => {
    return tags.map((item, index) => {
      return (
        <Tag
          key={index}
          type={item}
          isSelected={isSelected(item)}
          onPress={onTagPress}
        />
      );
    });
  }, [tags, isSelected, onTagPress]);

  return <View style={styles.container}>{itemList}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "center",
    width: "100%",
    // backgroundColor: "#D9CACA",
    borderColor: constants.LightTheme.last,
    borderRadius: 10,
    paddingVertical: 6,
    // marginHorizontal: 16,
    // margin: 10,
    // padding: 5,
  },
});

export default TagsContainer;
