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
        fontSize={FontSize.s}
      >
        {type}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.LightTheme.secondary,
    marginHorizontal: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 30,
    borderColor: constants.LightTheme.secondary,
    borderWidth: 1,
    opacity: 0.3,
    elevation: 4,
  },
  selectedContainer: {
    opacity: 1,
  },
  text: {
    opacity: 1,
    fontWeight: "600",
  },
  selectedText: {
    opacity: 1,
  },
});

export default React.memo(Tag);
