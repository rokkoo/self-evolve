import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    row: {
        alignItems: 'center',
        flexDirection: 'row',
  
    },
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#FFDCDC',
        borderColor: '#DFDFDF',
        borderWidth: 3,
        borderRadius: 20,
        margin: 20,
        width: "90%",
    },
    left: {
        flex: 1,
    },
    right: {
        alignItems: 'center',
        width: "30%",
        backgroundColor: '#ffff'
    },
    tagsbox: {
        width: "90%",
        marginBottom: 20,
        backgroundColor: '#CFFFCD',
        borderColor: "#CDCDCD",
        borderWidth: 3,
        borderRadius: 20,
        display: 'flex',
        
    },
    text: {
        fontSize: 16,
        margin: 20,

    },
    hour: {
        fontSize: 14,
    },
    emotionalStatus: {
        width: 80,
        height: 80,
        backgroundColor: "#F95B5B"
    }
})
