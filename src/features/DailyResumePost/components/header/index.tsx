import { useCallback } from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LayoutMetrics } from "../../../../constants/metrics";
import useAppNavigation from "../../../../navigation/hooks/useAppNavigation";
import { FlowEnum } from "../../../../navigation/types";

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  imageContainer: {},
  image: {
    width: 28,
    height: 28,
  },
});

export default Header;
