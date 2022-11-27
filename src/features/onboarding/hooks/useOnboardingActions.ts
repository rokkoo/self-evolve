import { useCallback } from "react";

import { FlowEnum } from "../../../navigation/types";
import useUserData from "../../../states/zustand/hooks/useUserData";
import useAppNavigation from "../../../navigation/hooks/useAppNavigation";

const useOnboardingActions = () => {
  const { saveUserData, user, onboardingSeen } = useUserData();
  const { reset } = useAppNavigation();

  const handleAction = useCallback(() => {
    onboardingSeen();

    reset(FlowEnum.Home);
  }, []);

  const handleNextPress = useCallback(
    (name: string) => {
      saveUserData({ name });
      handleAction();
    },
    [handleAction]
  );

  return {
    handleNextPress,
    handleDismiss: handleAction,
  };
};

export default useOnboardingActions;
