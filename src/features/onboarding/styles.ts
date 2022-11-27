import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  upsideContainer: {
    flex: 1,
    // alignContent: "center",
    // justifyContent: "center",
    // backgroundColor: "red",
    // height: "100%",
  },
  downsideContainer:{
    flex:1, 
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    width: '100%',
    // margin: 20,
  },
  input: {
    padding: 10,
    paddingBottom: 4,
    borderColor: "gray",
    borderBottomWidth: 0.8,
    borderRadius: 10,
    alignSelf: "center",
    width: "80%",
  },
  inputError: {
    color: "red",
    marginTop: 8,
    marginLeft: 8,
  },
  background:{
    
  }
});
