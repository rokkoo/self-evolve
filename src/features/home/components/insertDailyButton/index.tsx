import { View, StyleSheet, Text } from "react-native"

const InsertDailyButton = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>TEST</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    text: {
        backgroundColor: 'red',
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 10,

    }
})

export default InsertDailyButton;