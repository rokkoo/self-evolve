import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { MMKV } from "react-native-mmkv";

export const storage = new MMKV({
  id: `user-storage`,
  encryptionKey: "hunter2",
});

export default function App() {
  const handleSave = useCallback(() => {
    storage.set("user.name", "Marc");
    storage.set("user.age", 21);
    storage.set("is-mmkv-fast-asf", true);
  }, []);

  const handleRead = useCallback(() => {
    const keys = storage.getAllKeys();
    console.log({ keys });

    const username = storage.getString("user.name"); // 'Marc'
    const age = storage.getNumber("user.age"); // 21
    const isMmkvFastAsf = storage.getBoolean("is-mmkv-fast-asf"); // true
    const nn = storage.getBoolean("is-asf"); // true

    console.log({
      username,
      age,
      isMmkvFastAsf,
      nn,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button onPress={handleSave} title="save" />
      <Button onPress={handleRead} title="Read now" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
