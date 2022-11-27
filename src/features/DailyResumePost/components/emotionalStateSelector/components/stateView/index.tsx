import { useMemo } from "react"
import { Image, StyleSheet, View } from "react-native"
import AppText from "../../../../../../component/AppText"
import { FontSize } from "../../../../../../constants/metrics"
import { iconSource } from "../../../../../../lib/emotionsLib"
import { EmotionStatus, TagType } from "../../../../../../states/zustand/types"

interface Props {
    text: string,
    emotionalStatus: EmotionStatus,
}

const StateView: React.FC<Props>= ({ text, emotionalStatus}) => {
    const source = useMemo(() => {
        return iconSource(emotionalStatus)
      }, [emotionalStatus]);
    
    return (
        <View style={styles.statusContainer}>
            <Image 
                style={styles.emotionalStatus} 
                source={source}
                resizeMode="contain"
                />
            <AppText
                children={text}
                fontSize={FontSize.l} />
        </View>
    )
}

const styles = StyleSheet.create({
    emotionalStatus: {
        width: 60,
        height: 60,
    },
    statusContainer: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
    }
})

export default StateView;