import { StyleSheet, View } from "react-native";
import AppHeader from "../../component/AppHeader";
import AppLayout from "../../component/AppLayout";
import AppLayoutScrollView from "../../component/AppLayoutScrollView";
import AppText from "../../component/AppText";
import { FontSize } from "../../constants/metrics";
import useAuthentication from "../../hooks/useAuthentication";
import useUserData from "../../states/zustand/hooks/useUserData";
import AuthenticationView from "./components/AuthenticationView";
import EmailView from "./components/emailView";
import NameView from "./components/nameView";

const Settings = () => {
  return (
    <AppLayout>
      <AppHeader />
      <AppLayoutScrollView>
        <AppText fontSize={FontSize.xl}>Settings</AppText>
        <View style={styles.container}>
          <NameView />
          <EmailView />
          <AuthenticationView />
        </View>
      </AppLayoutScrollView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },
});
export default Settings;
