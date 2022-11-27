import { useCallback } from "react";
import { Alert } from "react-native";
import { FlowEnum } from "../../../navigation/types";
import useUserData from "../../../states/zustand/hooks/useUserData";
import useAppNavigation from "../../../navigation/hooks/useAppNavigation";

const useOnboardingActions = () => {
  const { saveUserData, togglePasscode, onboardingSeen } = useUserData();
  const { reset } = useAppNavigation();

  const handleAction = useCallback(() => {
    const next = () => {
      onboardingSeen();
      reset(FlowEnum.Home);
    };

    Alert.alert("Por tu seguridad, ¿quieres activar tu passcode?", undefined, [
      {
        text: "Aceptar",
        onPress: () => {
          togglePasscode();
          next();
        },
      },
      {
        text: "Cancelar",
        onPress: () => {
          next();
        },
      },
    ]);
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
