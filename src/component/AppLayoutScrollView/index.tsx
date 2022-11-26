import { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  ViewStyle,
} from "react-native";

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
const AppLayoutScrollView = ({ children, style }: Props) => {
  return (
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={"handled"}
      contentContainerStyle={[style]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {children}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AppLayoutScrollView;
