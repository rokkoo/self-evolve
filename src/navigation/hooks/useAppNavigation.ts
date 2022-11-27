import { useCallback } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { AppNavigationProps, FlowName, StackParamList } from "../types";

const useAppNavigation = () => {
  const navigation = useNavigation<AppNavigationProps>();
  const isFocused = useIsFocused();

  const reset = useCallback((routeeName: FlowName) => {
    navigation.reset({
      index: 0,
      routes: [{ key: "0", name: routeeName }],
    });
  }, []);

  return { navigation, isFocused, reset };
};

export default useAppNavigation;
