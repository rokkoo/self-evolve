import { useCallback } from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SaveButton from "../../../../component/SaveButton";
import { LayoutMetrics } from "../../../../constants/metrics";
import useAppNavigation from "../../../../navigation/hooks/useAppNavigation";

const Header = () => {
  const { navigation } = useAppNavigation();

  const handleSettingsPress = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleSettingsPress}
        style={styles.imageContainer}
      >
        <Image
          source={require("../../../../../assets/icons/close.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <SaveButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: LayoutMetrics.headerVericalSpacing,
  },
  imageContainer: {},
  image: {
    width: 28,
    height: 28,
  },
});

export default Header;
