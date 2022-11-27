import { useCallback, ReactNode } from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LayoutMetrics } from "../../constants/metrics";
import useAppNavigation from "../../navigation/hooks/useAppNavigation";

interface Props {
  rightChilder?: ReactNode;
}

const AppHeader = (props: Props) => {
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
          source={require("../../../assets/icons/close.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      {props.rightChilder}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: LayoutMetrics.headerVerticalSpacing,
  },
  imageContainer: {},
  image: {
    width: 28,
    height: 28,
  },
});

export default AppHeader;
