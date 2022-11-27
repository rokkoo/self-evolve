import { Image, StyleSheet, Text, View } from "react-native";
import AppText from "../../../../component/AppText";
import { FontSize } from "../../../../constants/metrics";

const EmotionalStateSelector = () => {
    return (
        <View style={styles.container}>
            
            
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