import { useCallback } from "react";
import { FlowEnum } from "../../../navigation/types";
import useUserData from "../../../states/zustand/hooks/useUserData";
import useAppNavigation from "../../../navigation/hooks/useAppNavigation";

const useOnboardingActions = () => {
  const { saveUserData, user, onboardingSeen } = useUserData();
  const { navigation } = useAppNavigation();

  const handleAction = useCallback(() => {
    onboardingSeen();
    navigation.navigate(FlowEnum.Home);
  }, []);

  const handleNextPress = useCallback((name: string) => {
    saveUserData({ name });
    console.log("name saved");
    handleAction();
  }, []);

  console.log({ user });

  return {
    handleNextPress,
    handleDismiss: handleAction,
  };
};

export default useOnboardingActions;
