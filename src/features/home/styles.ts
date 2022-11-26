import { StyleSheet } from "react-native";
import constants from "../../constants";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: constants.LightTheme.primary,
    },
    top: {
      height: "10%",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: "100%",
    },
    calendar: {
      height: "10%",
      fontSize: 16,
      alignContent: "center",
      justifyContent: "center",
      backgroundColor: constants.LightTheme.secondary,
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
  