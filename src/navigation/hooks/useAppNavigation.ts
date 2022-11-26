import { useCallback } from "react";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import { AppNavigationProps, FlowName } from "../types";

const useAppNavigation = () => {
  const route = useRoute();
  const navigation = useNavigation<AppNavigationProps>();
  const isFocused = useIsFocused();

  const reset = useCallback((routeeName: FlowName) => {
    navigation.reset({
      index: 0,
      routes: [{ key: "0", name: routeeName }],
    });
  }, []);

  return { navigation, route, isFocused, reset };
};

export default useAppNavigation;
