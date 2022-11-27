import { useCallback } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FlowEnum } from "../../../../navigation/types";
import { LayoutMetrics } from "../../../../constants/metrics";
import useAppNavigation from "../../../../navigation/hooks/useAppNavigation";

const Header = () => {
  const { navigation } = useAppNavigation();

  const handleSettingsPress = useCallback(() => {
    navigation.navigate(FlowEnum.DailyResumePost);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSettingsPress}>
        <Image
          source={require("../../../../../assets/icons/settings.png")}
          style={styles.settingsImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical:
      LayoutMetrics.headerVericalSpacing + LayoutMetrics.headerVericalSpacing,
    paddingHorizontal: LayoutMetrics.horizontalSpacing,
    alignItems: "flex-end",
  },
  settingsImage: {
    width: 28,
    height: 28,
  },
});

export default Header;
