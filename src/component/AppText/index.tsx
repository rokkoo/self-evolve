import React, { ReactNode } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { FontSize } from "../../constants/metrics";

interface Props {
  children: ReactNode;
  fontSize?: typeof FontSize[keyof typeof FontSize];
  style?: StyleProp<TextStyle>;
}

const AppText: React.FC<Props> = ({ children, fontSize = 10, style }) => {
  return <Text style={[{ fontSize }, style]}>{children}</Text>;
};

export default AppText;
