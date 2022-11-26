import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import { AppNavigationProps } from "../types";

const useAppNavigation = () => {
  const route = useRoute();
  const navigation = useNavigation<AppNavigationProps>();
  const isFocused = useIsFocused();

  return { navigation, route, isFocused };
};

export default useAppNavigation;
