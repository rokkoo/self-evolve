import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import useOnboarding from "../../hooks/useOnboarding";
import useOnboardingActions from "../../hooks/useOnboardingActions";

interface Props {
    username: string,
}

const BottomButtons:React.FC<Props> = (props) => {
    const { handleNextPress, handleDismiss } = useOnboardingActions();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleDismiss}>
            <Text>SALTAR</Text>
            </TouchableOpacity>

            <View style={styles.verticleLine}></View>

            <TouchableOpacity onPress={() => handleNextPress(props.username)}>
            <Text>SIGUIENTE</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 70,
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        // backgroundColor: "blue",
        alignSelf: "flex-end",
        // flex: 1,
    },
    verticleLine: {
        height: "100%",
        width: 1,
        backgroundColor: "#909090",
    },
})

export default BottomButtons;