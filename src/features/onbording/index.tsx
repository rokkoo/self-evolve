import { useCallback, useEffect } from "react";
import { Button, View } from "react-native";
import { hasHardwareAsync } from "expo-local-authentication";

import useUserData from "../../states/zustand/hooks/useUserData";

const Onboarding = () => {
  const { saveUserData, user } = useUserData();

  const handleSave = useCallback(() => {
    const user = { name: "alfonso" };
    saveUserData(user);
  }, []);

  useEffect(() => {
    const init = async () => {
      try {
        const compatible = await hasHardwareAsync();

        console.log({ compatible });
      } catch (error) {
        console.log({ error });
      }
    };

    init();
  }, []);

  return (
    <View>
      <Button onPress={handleSave} title="save" />
    </View>
  );
};

export default Onboarding;
