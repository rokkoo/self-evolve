import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNavigationContainer from "./src/navigation";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigationContainer />
    </GestureHandlerRootView>
  );
}
