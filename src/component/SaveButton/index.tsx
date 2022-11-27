import React, { useCallback } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import { useRoute, RouteProp } from "@react-navigation/native";

import constants from "../../constants";
import { FontSize } from "../../constants/metrics";
import useDailyResumeState from "../../features/DailyResumePost/state/useDailyResumeState";
import useAppNavigation from "../../navigation/hooks/useAppNavigation";
import { FlowEnum, StackParamList } from "../../navigation/types";
import useUserResumePost from "../../states/zustand/hooks/useUserResumePost";
import AppText from "../AppText";

const SaveButton = () => {
  const { emotion, tags, note, resetState } = useDailyResumeState();
  const { addNewPost } = useUserResumePost();
  const { reset } = useAppNavigation();
  const route = useRoute<RouteProp<StackParamList, FlowEnum.DailyResumePost>>();

  const handleSavePress = useCallback(() => {
    if (!emotion) {
      return Toast.show({
        position: "bottom",
        type: "error",
        text1: "Seleccione alguna emoción",
      });
    }

    const postType = route.params?.type;
    addNewPost({ emotion, tags, note, type: postType });
    resetState();
    reset(FlowEnum.Home);
  }, [emotion, tags, note]);

  return (
    <TouchableOpacity style={styles.container} onPress={handleSavePress}>
      <AppText style={styles.buttonText}>GUARDAR</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.LightTheme.last,
    borderRadius: 60,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  buttonText: {
    color: constants.LightTheme.primary,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
    fontSize: FontSize.s,
  },
});

export default SaveButton;
