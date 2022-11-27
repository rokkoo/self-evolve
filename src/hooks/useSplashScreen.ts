import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { FontFamilys } from "../constants/metrics";

SplashScreen.preventAutoHideAsync();

const useSplashScreen = () => {
  const [fontsLoaded] = useFonts({
    [FontFamilys.REGULAR]: require("../../assets/fonts/Author-Regular.otf"),
    [FontFamilys.BOLD]: require("../../assets/fonts/Author-Bold.otf"),
    [FontFamilys.SEMI]: require("../../assets/fonts/Author-Semibold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return {
    onLayoutRootView,
    fontsLoaded,
  };
};

export default useSplashScreen;
