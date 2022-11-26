import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import useUserData from "../../../states/zustand/hooks/useUserData";

const useOnboardingActions = () => {
  const { saveUserData, user } = useUserData();
  const navigation = useNavigation();

  const handleNextPress = useCallback((name: string) => {
    saveUserData({ name });
    console.log("name saved");
    navigation.navigate("Home");
  }, []);

  const handleDismiss = useCallback(() => {
    navigation.navigate("Home");
  }, []);

  console.log({ user });

  return {
    handleNextPress,
    handleDismiss,
  };
};

export default useOnboardingActions;
