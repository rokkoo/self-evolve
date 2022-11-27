import React, { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";

import constants from "../../constants";
import useDailyResumeState from "../../features/DailyResumePost/state/useDailyResumeState";
import useAppNavigation from "../../navigation/hooks/useAppNavigation";
import { FlowEnum } from "../../navigation/types";
import useUserResumePost from "../../states/zustand/hooks/useUserResumePost";

const SaveButton = () => {
  const { emotion, tags, note } = useDailyResumeState();
  const { addNewPost } = useUserResumePost();
  const { reset } = useAppNavigation();

  const handleSavePress = useCallback(() => {
    if (!emotion) {
      return Toast.show({
        position: "bottom",
        type: "error",
        text1: "Seleccione alguna emoción",
      });
    }

    addNewPost({ emotion, tags, note });
    reset(FlowEnum.Home);
  }, [emotion, tags, note]);

  return (
    <TouchableOpacity style={styles.container} onPress={handleSavePress}>
      <Text style={styles.buttonText}>GUARDAR</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.LightTheme.last,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    width: "100%",
  },
  buttonText: {
    color: constants.LightTheme.primary,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
  },
});

export default SaveButton;
