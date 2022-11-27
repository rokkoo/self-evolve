import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "../../../../component/AppText";
import { FontSize } from "../../../../constants/metrics";
import useOnboarding from "../../hooks/useOnboarding";
import useOnboardingActions from "../../hooks/useOnboardingActions";

interface Props {
  username: string;
}

const BottomButtons: React.FC<Props> = (props) => {
  const { handleNextPress, handleDismiss } = useOnboardingActions();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDismiss}>
        <AppText bold fontSize={FontSize.l}>
          SALTAR
        </AppText>
      </TouchableOpacity>

      <View style={styles.verticleLine}></View>

      <TouchableOpacity onPress={() => handleNextPress(props.username.trim())}>
        <AppText bold fontSize={FontSize.l}>
          SIGUIENTE
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 70,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    // backgroundColor: "blue",
    alignSelf: "flex-end",
    // flex: 1,
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#909090",
  },
});

export default BottomButtons;
