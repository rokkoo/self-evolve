import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNavigationContainer from "./src/navigation";

// Necesary to use uuid
import "react-native-get-random-values";
import useSplashScreen from "./src/hooks/useSplashScreen";

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useSplashScreen();

  if (!fontsLoaded) {
    return null;
  }

  console.log({ fontsLoaded });

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AppNavigationContainer />
      <Toast />
    </GestureHandlerRootView>
  );
}
