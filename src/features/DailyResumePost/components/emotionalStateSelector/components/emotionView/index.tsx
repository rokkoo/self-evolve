import { useCallback, useMemo } from "react";
import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import AppText from "../../../../../../component/AppText";
import constants from "../../../../../../constants";
import { FontSize } from "../../../../../../constants/metrics";
import { emotionText, iconSource } from "../../../../../../lib/emotionsLib";
import { EmotionType, TagType } from "../../../../../../states/zustand/types";
import useDailyResumeState from "../../../../state/useDailyResumeState";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);
interface Props {
  emotionalStatus: EmotionType;
}

const EmotionView: React.FC<Props> = ({ emotionalStatus }) => {
  const { emotion, addEmotion } = useDailyResumeState();

  const isSelected = useMemo(() => {
    return emotion === emotionalStatus;
  }, [emotion, emotionalStatus]);

  const handleEmotionPress = useCallback(() => {
    addEmotion(emotionalStatus);
  }, [emotionalStatus]);

  const source = useMemo(() => {
    return iconSource(emotionalStatus);
  }, [emotionalStatus]);

  return (
    <AnimatedTouchableOpacity
      style={[styles.statusContainer, isSelected && styles.selectedContainer]}
      onPress={handleEmotionPress}
    >
      <Image
        style={styles.emotionalStatus}
        source={source}
        resizeMode="contain"
      />
      <AppText
        style={[styles.text, isSelected && styles.selectedText]}
        fontSize={FontSize.l}
      >
        {emotionText(emotionalStatus)}
      </AppText>
    </AnimatedTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  emotionalStatus: {
    width: 60,
    height: 60,
  },
  text: {
    paddingHorizontal: 10,
  },
  statusContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 8,
    paddingBottom: 10,
    margin: 3,
  },
  selectedContainer: {
    backgroundColor: constants.LightTheme.terciary,
    borderRadius: 20,
    padding: 8,
    paddingBottom: 10,
    margin: 3,
  },
  selectedText: {
    fontWeight: "bold",
    color: constants.LightTheme.primary,
    paddingHorizontal: 10,
  },
});

export default EmotionView;
