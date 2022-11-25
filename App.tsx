import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { Button, Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import { MMKV } from "react-native-mmkv";

import Header from "./components/header/Header";
import TextOnboarding from "./components/onboarding/TextOnboarding";

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

  const text = "Nombre..."

  return (  
      <View style={styles.container}>
        <View style={styles.upside_container}>
          <Header></Header>
          <TextOnboarding text="Bienvenido,
          Esta aplicación te servirá para adquirir consciencia sobre tus emociones en tu día a día. Con ella podrás tener un calendario con el histórico de tu estado emocional, podrás expresar como te sientes, decir lo que has hecho en el día y ver diferentes gráficas para analizar tus estados de animo.  "/>
          <Text style={{margin:20}}>Para una experiencia personalizada, puedes introducir tu nombre:</Text>
          <TextInput
            style={styles.input}
            value={text}
          />
        </View>
        <View style={styles.bottom_container}>
          
          <View onTouchEnd={handleRead}>
              <Text>SALTAR</Text>
            </View>

          <View style={styles.verticleLine}></View>

          <View onTouchEnd={handleRead}>
            <Text>SIGUIENTE</Text>
          </View>
            
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 30,

  },
  upside_container: {
    flex: 1,
    fontSize: 16,
    alignContent: 'center',
    justifyContent: 'center',
  },

  bottom_container: {
    padding:10,
    paddingTop: 70,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  
  input: {
    borderColor: "gray",
    borderWidth: 0.8,
    margin:20,
    borderRadius: 10,
    padding: 10,
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  }
});
