import { useMemo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../features/home";
import Onboarding from "../features/onboarding";
import useUserData from "../states/zustand/hooks/useUserData";
import { FlowEnum } from "./types";

const Stack = createNativeStackNavigator();

function AppStack() {
  const { onboardingPasses } = useUserData();

  const initialRouteName = useMemo(() => {
    if (onboardingPasses) {
      return FlowEnum.Home;
    }

    FlowEnum.Onboarding;
  }, [onboardingPasses]);

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name={FlowEnum.Onboarding}
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={FlowEnum.Home}
        component={Home}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
