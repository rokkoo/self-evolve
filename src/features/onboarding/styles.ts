import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  upside_container: {
    flex: 1,
    // alignContent: "center",
    // justifyContent: "center",
    // backgroundColor: "red",
    // height: "100%",
  },

  bottom_container: {
    padding: 10,
    marginTop: 70,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    // backgroundColor: "blue",
    alignSelf: "flex-end",
    // flex: 1,
  },
  inputContainer: {
    // margin: 20,
  },
  input: {
    padding: 10,
    paddingBottom: 4,
    borderColor: "gray",
    borderBottomWidth: 0.8,
    borderRadius: 10,
    alignSelf: "center",
    width: 120,
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#909090",
  },
  inputError: {
    color: "red",
    marginTop: 8,
    marginLeft: 8,
  },
});
