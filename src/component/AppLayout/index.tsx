import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { LayoutMetrics } from "../../constants/metrics";

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: LayoutMetrics.verticalSpacing,
    marginHorizontal: LayoutMetrics.horizontalSpacing,
  },
});

export default AppLayout;
