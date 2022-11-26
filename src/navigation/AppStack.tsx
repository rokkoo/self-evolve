import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../features/home";
import Onboarding from "../features/onboarding";

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default AppStack;
