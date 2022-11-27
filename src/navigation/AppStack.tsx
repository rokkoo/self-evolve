import { useMemo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../features/home";
import Onboarding from "../features/onboarding";
import useUserData from "../states/zustand/hooks/useUserData";
import { FlowEnum } from "./types";
import DailyResumePost from "../features/DailyResumePost";
import Settings from "../features/settings";
import SignUp from "../features/SignUp";

const Stack = createNativeStackNavigator();

function AppStack() {
  const { onboardingPasses, enablePasscode } = useUserData();

  console.log({ d: onboardingPasses && enablePasscode });

  const initialRouteName = useMemo(() => {
    if (onboardingPasses && enablePasscode) {
      return FlowEnum.SignUp;
    }

    if (onboardingPasses) {
      return FlowEnum.Home;
    }

    return FlowEnum.Onboarding;
  }, [onboardingPasses, enablePasscode]);

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name={FlowEnum.SignUp}
        component={SignUp}
        options={{ headerShown: false }}
      />
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
      <Stack.Screen
        options={{ headerShown: false, presentation: "fullScreenModal" }}
        name={FlowEnum.DailyResumePost}
        component={DailyResumePost}
      />
      <Stack.Screen
        options={{ headerShown: false, presentation: "fullScreenModal" }}
        name={FlowEnum.Settings}
        component={Settings}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
