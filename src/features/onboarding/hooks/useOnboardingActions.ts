import { useCallback } from "react";
import { FlowEnum } from "../../../navigation/types";
import useUserData from "../../../states/zustand/hooks/useUserData";
import useAppNavigation from "../../../navigation/hooks/useAppNavigation";

const useOnboardingActions = () => {
  const { saveUserData, user } = useUserData();
  const { navigation } = useAppNavigation();

  const handleNextPress = useCallback((name: string) => {
    saveUserData({ name });
    console.log("name saved");
    navigation.navigate(FlowEnum.Home);
  }, []);

  const handleDismiss = useCallback(() => {
    navigation.navigate(FlowEnum.Home);
  }, []);

  console.log({ user });

  return {
    handleNextPress,
    handleDismiss,
  };
};

export default useOnboardingActions;
