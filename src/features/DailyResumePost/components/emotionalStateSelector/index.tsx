import { Image, StyleSheet, Text, View } from "react-native";
import AppText from "../../../../component/AppText";
import { FontSize } from "../../../../constants/metrics";
import { EmotionalStatusEnum } from "../../../../states/zustand/types";
import StateView from "./components/stateView";

const EmotionalStateSelector = () => {
    return (
        <View style={styles.container}>
            <StateView
                emotionalStatus={EmotionalStatusEnum.HAPPY}
                text="Bien"/>
            <StateView
                emotionalStatus={EmotionalStatusEnum.NEUTRAL}
                text="Normal"/>
            <StateView
                emotionalStatus={EmotionalStatusEnum.SAD}
                text="Mal"/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        
    },
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

export default EmotionalStateSelector;