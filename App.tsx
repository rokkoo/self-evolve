import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNavigationContainer from "./src/navigation";

// Necesary to use uuid
import "react-native-get-random-values";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigationContainer />
    </GestureHandlerRootView>
  );
}
