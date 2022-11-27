import { StyleSheet } from "react-native";
import constants from "../../../../constants";

export const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  tagsContainer: {
    marginHorizontal: 22,
  },
  container: {
    flexDirection: "column",
    backgroundColor: constants.LightTheme.instantCardBackground,
    borderColor: constants.LightTheme.terciary,
    borderRadius: 20,
    paddingVertical: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    elevation: 4,
  },
  textAndHourContainer: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 3,
    marginVertical: 10,
  },
  text: {},
  hour: {
    opacity: 0.5,
    fontSize: 14,
    marginBottom: 20,
  },
  emotionalStatus: {
    width: 70,
    height: 70,
    borderRadius: 20,
    margin: 5,
  },
  tagsBox: {
    paddingHorizontal: 30,
  },
});
