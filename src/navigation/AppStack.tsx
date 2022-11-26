import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../features/home";
import Onboarding from "../features/onboarding";
import { FlowEnum } from "./types";

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={FlowEnum.Onboarding}
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={FlowEnum.Home} component={Home} />
    </Stack.Navigator>
  );
}

export default AppStack;
