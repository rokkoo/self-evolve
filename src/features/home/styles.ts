import { StyleSheet } from "react-native";
import constants from "../../constants";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: constants.LightTheme.primary,
    },
    top: {
      backgroundColor: 'red',
      alignItems: "center",
      flexDirection: "row",
      flexWrap: 'wrap',
      justifyContent: "space-evenly",
    },
    calendar: {
      height: "10%",
      fontSize: 16,
      alignContent: "center",
      justifyContent: "center",
      backgroundColor: constants.LightTheme.secondary,
    },
    saraut: {
      
    },
    verticleLine: {
      height: "80%",
      width: 1,
      backgroundColor: constants.LightTheme.last,
    },
    year: {
      fontSize: 34,
    },
    daily: {
      flexDirection: "column",
      alignItems: "center",
    },
  });
  