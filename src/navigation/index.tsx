import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";

function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default AppNavigationContainer;
