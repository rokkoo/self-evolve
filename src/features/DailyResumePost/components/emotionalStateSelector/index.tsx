import { Image, StyleSheet, Text, View } from "react-native";
import AppText from "../../../../component/AppText";
import { FontSize } from "../../../../constants/metrics";

const EmotionalStateSelector = () => {
    return (
        <View style={styles.container}>
            <View style={styles.statusContainer}>
                <Image 
                    style={styles.emotionalStatus} 
                    source={require(`../../../../../assets/icons/emotions/happy.png`)}
                    resizeMode="contain"
                    />
                <AppText>Muy bien</AppText>
            </View>
            <View style={styles.statusContainer}>
                <Image 
                    style={styles.emotionalStatus} 
                    source={require(`../../../../../assets/icons/emotions/ok.png`)}
                    resizeMode="contain"
                    />
                <AppText>Bien</AppText>
            </View>
            <View style={styles.statusContainer}>
                <Image 
                    style={styles.emotionalStatus} 
                    source={require(`../../../../../assets/icons/emotions/neutral.png`)}
                    resizeMode="contain"
                    />
                <AppText>Regular</AppText>
            </View>
            <View style={styles.statusContainer}>
                <Image 
                    style={styles.emotionalStatus} 
                    source={require(`../../../../../assets/icons/emotions/confused.png`)}
                    resizeMode="contain"
                    />
                <AppText>Mal</AppText>
            </View>
            <View style={styles.statusContainer}>
                <Image 
                    style={styles.emotionalStatus} 
                    source={require(`../../../../../assets/icons/emotions/sad.png`)}
                    resizeMode="contain"
                    />
                <AppText>Muy mal</AppText>
            </View>
            
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