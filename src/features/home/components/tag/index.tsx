import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../../../../component/AppText";
import constants from "../../../../constants";
import { FontSize } from "../../../../constants/metrics";
import { TagType } from "../../../../states/zustand/types";

interface Props {
  type: TagType;
  isSelected: boolean;
  onPress?: (tag: TagType) => void;
}

const Tag: React.FC<Props> = ({ type, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      disabled={!Boolean(onPress)}
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={() => onPress?.(type)}
    >
      <AppText 
        style={[styles.text, isSelected && styles.selectedText]}
        fontSize={FontSize.s}>{type}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.LightTheme.secondary,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: constants.LightTheme.secondaryBorder,
  },
  selectedContainer: {
    backgroundColor: constants.LightTheme.terciary,
    borderRadius: 6,
    margin: 3,
  },
  text: {
    opacity: 0.4,
  },
  selectedText: {
    fontWeight: 'bold',
    opacity: 1,
    color: constants.LightTheme.secondary,
  }
});

export default React.memo(Tag);
