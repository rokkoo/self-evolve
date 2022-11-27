import { View, Switch, StyleSheet } from "react-native";
import AppText from "../../../../component/AppText";
import { FontSize } from "../../../../constants/metrics";
import useUserData from "../../../../states/zustand/hooks/useUserData";

const AuthenticationView = () => {
  const { togglePasscode, enablePasscode } = useUserData();

  return (
    <View style={styles.container}>
      <AppText fontSize={FontSize.l} semi style={{ marginRight: 16 }}>
        Security
      </AppText>
      <Switch value={enablePasscode} onChange={togglePasscode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AuthenticationView;
