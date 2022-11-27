import { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { withDecay } from "react-native-reanimated";
import AppText from "../../../../component/AppText";
import { FontSize } from "../../../../constants/metrics";
import { EmotionalStatusEnum, TagsEnum } from "../../../../states/zustand/types";
import Tag from "../../../home/components/tag";
import useDailyResumeState from "../../state/useDailyResumeState";
import EmotionView from "./components/emotionView";

const EmotionalStateSelector = () => {
    const { emotion } = useDailyResumeState();

    const availableEmotions = useMemo(() => {
        const emotions = Object.values(EmotionalStatusEnum);
    
        return emotions;
      }, []);
    
      const itemList = useMemo(() => {
        return availableEmotions.map((item, index) => {
          return <EmotionView key={index} emotionalStatus={item} />;
        });
      }, [emotion]);

    return (
        <View style={styles.container}>
            <EmotionView
                emotionalStatus={EmotionalStatusEnum.HAPPY}/>
            <EmotionView
                emotionalStatus={EmotionalStatusEnum.NEUTRAL}/>
            <EmotionView
                emotionalStatus={EmotionalStatusEnum.SAD}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '100%'
        
    },
})

export default EmotionalStateSelector;