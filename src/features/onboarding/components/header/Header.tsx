import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../../../component/AppText";

const Header = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.header} bold>
        Self
      </AppText>
      <AppText style={styles.header} bold>
        Evolve
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingVertical: 30,
    paddingTop: 70,
    flex: 1,
  },
  header: {
    fontSize: 62,
    margin: 10,
  },
});

export default Header;
