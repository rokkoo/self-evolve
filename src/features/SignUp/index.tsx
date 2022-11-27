import { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppLayout from "../../component/AppLayout";
import AppText from "../../component/AppText";
import constants from "../../constants";
import { FontSize } from "../../constants/metrics";
import useAuthentication from "../../hooks/useAuthentication";
import useAppNavigation from "../../navigation/hooks/useAppNavigation";
import { FlowEnum } from "../../navigation/types";

const SignUp = () => {
  const { handleAuthenticate, isAuthenticated } = useAuthentication();
  const { navigation } = useAppNavigation();

  useEffect(() => {
    handleAuthenticate();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate(FlowEnum.Home);
    }
  }, [isAuthenticated]);

  return (
    <AppLayout>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleAuthenticate} style={styles.button}>
          <AppText fontSize={FontSize.xxl}>Entrar</AppText>
        </TouchableOpacity>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: constants.LightTheme.last,
    borderRadius: 60,
    paddingVertical: 6,
    paddingHorizontal: 14,
    elevation: 4,
  },
});

export default SignUp;
