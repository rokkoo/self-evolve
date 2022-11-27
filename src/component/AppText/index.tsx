import React, { ReactNode, useMemo } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { FontFamilys, FontSize } from "../../constants/metrics";

interface Props {
  children: ReactNode;
  fontSize?: typeof FontSize[keyof typeof FontSize];
  style?: StyleProp<TextStyle>;
  bold?: boolean;
}

const AppText: React.FC<Props> = ({
  children,
  fontSize = 10,
  style,
  ...props
}) => {
  const fontFamily = useMemo(() => {
    if (props.bold) {
      return FontFamilys.BOLD;
    }

    return FontFamilys.REGULAR;
  }, [props]);

  return <Text style={[{ fontSize, fontFamily }, style]}>{children}</Text>;
};

export default AppText;
