import { StyleSheet } from "react-native";
import constants from "../../../../constants";

export const styles = StyleSheet.create({
    row: {
        alignItems: 'center',
        flexDirection: 'row',
  
    },
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: constants.LightTheme.secondary,
        borderColor: constants.LightTheme.terciary,
        borderRadius: 20,
        marginVertical: 10,
        width: "90%",
    },
    left: {
        flex: 1,
    },
    right: {
        alignItems: 'center',
        width: "30%",
    },
    tagsbox: {
        width: "90%",
        margin: 10,
        backgroundColor: '#D9CACA',
        borderColor: constants.LightTheme.last,
        padding: 5,
        borderRadius: 10,
        display: 'flex',
    },
    text: {
        fontSize: 16,
        marginHorizontal: 20,
        marginVertical:10,

    },
    hour: {
        fontSize: 14,
        marginHorizontal: 20,
        marginTop: 10,
    },
    emotionalStatus: {
        width: 80,
        height: 80,
        borderRadius:20,
        backgroundColor: constants.LightTheme.last,
        margin: 5,
    }
})
