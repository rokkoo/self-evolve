import { StyleProp, StyleSheet, View } from "react-native";
import constants from "../../../../constants";
import { TagType } from "../../../../states/zustand/types";
import Tag from "../tag";

interface Props {
  tags: TagType[];
}

const TagsContainer: React.FC<Props> = (props) => {
  let itemList = props.tags.map((item, index) => {
    return <Tag key={index} type={item} />;
  });

  return <View style={styles.container}>{itemList}</View>;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "90%",
    margin: 10,
    backgroundColor: "#D9CACA",
    borderColor: constants.LightTheme.last,
    padding: 5,
    borderRadius: 10,
  },
});

export default TagsContainer;
