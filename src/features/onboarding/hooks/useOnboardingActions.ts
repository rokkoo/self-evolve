import { useCallback } from "react";
import useUserData from "../../../states/zustand/hooks/useUserData";

const useOnboardingActions = () => {
  const { saveUserData, user } = useUserData();

  const handleNextPress = useCallback((name: string) => {
    saveUserData({ name });
    console.log("name saved");
  }, []);

  console.log({ user });

  return {
    handleNextPress,
  };
};

export default useOnboardingActions;
