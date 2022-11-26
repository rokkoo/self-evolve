import React, { ReactNode, useMemo } from "react";
import { StyleProp, Text, ViewStyle } from "react-native";
import { FontSize } from "../../constants/metrics";

interface Props {
  children: ReactNode;
  fontSize?: typeof FontSize[keyof typeof FontSize];
  style?: StyleProp<ViewStyle>,
}

const AppText: React.FC<Props> = ({ children, fontSize = 10, style }) => {
  return <Text style={[{ fontSize }, style]}>{children}</Text>;
};

export default AppText;