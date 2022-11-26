import { Image, StyleSheet, Text, View } from "react-native";

const DailyResume = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> ESTE DÍA ESTABAS: </Text>
            <View style={styles.emotionalStatus}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    text: {
        fontSize: 20,
    },
    emotionalStatus: {
        width: 80,
        height: 80,
        backgroundColor: "#F95B5B"
    }
})

export default DailyResume;