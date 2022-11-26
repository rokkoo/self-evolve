import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#fbfae1",
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
      backgroundColor: "#04dead",
    },
    verticleLine: {
      height: "100%",
      width: 1,
      backgroundColor: "#909090",
    },
    year: {
      fontSize: 34,
    },
    daily: {
      flexDirection: "column",
      alignItems: "center",
    },
  });
  