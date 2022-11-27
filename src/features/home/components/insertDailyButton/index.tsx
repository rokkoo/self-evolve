import { useCallback } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import useAppNavigation from "../../../../navigation/hooks/useAppNavigation";
import { FlowEnum } from "../../../../navigation/types";

const InsertDailyButton = () => {
  const { navigation } = useAppNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate(FlowEnum.DailyResumePost);
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>TEST</Text>
    </TouchableOpacity>
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
