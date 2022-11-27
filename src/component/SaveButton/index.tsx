import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import constants from "../../constants";


const SaveButton = () => {
  return (
        <View style={styles.container}>
            <Text style={styles.buttonText}>GUARDAR</Text>
        </View>
  )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: constants.LightTheme.last,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
    },
    buttonText: {
        color: constants.LightTheme.primary,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        textAlign: 'center',
    }
})

export default SaveButton;