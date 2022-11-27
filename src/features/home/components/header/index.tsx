import { useCallback, useMemo } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FlowEnum } from "../../../../navigation/types";
import { FontSize, LayoutMetrics } from "../../../../constants/metrics";
import useAppNavigation from "../../../../navigation/hooks/useAppNavigation";
import { PostTypeEnum } from "../../../../states/zustand/types";
import AppText from "../../../../component/AppText";
import useUserData from "../../../../states/zustand/hooks/useUserData";

const Header = () => {
  const { navigation } = useAppNavigation();
  const { user } = useUserData();

  const saraut = useMemo(() => {
    if (user.name != "") return `¡Hola, ${user.name}!`;
    return "¡Hola!";
  }, [user]);

  const handleSettingsPress = useCallback(() => {
    navigation.navigate(FlowEnum.Settings);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerSaraut}>
        <AppText fontSize={FontSize.l}>{saraut}</AppText>
      </View>
      <View style={styles.containerSettings}>
        <TouchableOpacity onPress={handleSettingsPress}>
          <Image
            source={require("../../../../../assets/icons/settings.png")}
            style={styles.settingsImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical:
      LayoutMetrics.headerVerticalSpacing + LayoutMetrics.headerVerticalSpacing,
    paddingHorizontal: LayoutMetrics.horizontalSpacing,
  },
  containerSaraut: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    alignContent: "flex-start",
  },
  containerSettings: {
    alignItems: "flex-end",
  },
  year: {},
  settingsImage: {
    width: 28,
    height: 28,
  },
});

export default Header;
