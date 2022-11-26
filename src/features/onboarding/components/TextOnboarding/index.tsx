import React from "react"; // we need this to make JSX compile
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  text: string;
}

const TextOnboarding: React.FC<Props> = ({ text }) => {
  const firstText = text.substr(0, text.indexOf(","));
  const secondText = text.substr(text.indexOf(",") + 3, text.length);
  return (
    <View style={styles.container}>
      <Text style={styles.first}>¡{firstText}!</Text>
      <Text style={styles.second}>{secondText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  first: {
    backgroundColor: "#BCFA2C",
    fontSize: 26,
    marginBottom: 20,
  },
  second: {
    fontSize: 14,
  },
});

export default TextOnboarding;
