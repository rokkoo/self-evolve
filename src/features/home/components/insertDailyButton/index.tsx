import { useCallback } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import useAppNavigation from "../../../../navigation/hooks/useAppNavigation";
import { FlowEnum } from "../../../../navigation/types";
import { PostTypeEnum } from "../../../../states/zustand/types";

const InsertDailyButton = () => {
  const { navigation } = useAppNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate(FlowEnum.DailyResumePost, {
      type: PostTypeEnum.RESUME,
    });
  }, []);

  const handleInstaPress = useCallback(() => {
    navigation.navigate(FlowEnum.DailyResumePost, {
      type: PostTypeEnum.INSTAN,
    });
  }, []);

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Text style={styles.text}>Resume</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container} onPress={handleInstaPress}>
        <Text style={styles.text}>Instant</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  text: {
    backgroundColor: "red",
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
});

export default InsertDailyButton;
