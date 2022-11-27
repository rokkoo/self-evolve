import { useCallback, useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import AppText from "../../../../component/AppText";
import constants from "../../../../constants";
import { FontSize } from "../../../../constants/metrics";
import useUserData from "../../../../states/zustand/hooks/useUserData";

const EmailView = () => {
  const [email, setEmail] = useState("");

  const handleSave = useCallback(() => {
    if (!email) {
      return Toast.show({
        position: "bottom",
        type: "error",
        text1: "Introduce un email",
      });
    }

    const isValidEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (!isValidEmail) {
      return Toast.show({
        position: "bottom",
        type: "error",
        text1: "Introduce un email valido",
      });
    }

    Toast.show({
      position: "bottom",
      text1: "Guardado",
    });
  }, [email]);

  return (
    <View style={styles.container}>
      <AppText fontSize={FontSize.l} style={{ fontWeight: "600" }}>
        Email al que deseas enviar tus notas
      </AppText>
      <TextInput
        value={email}
        placeholder="email"
        onChangeText={(email) => setEmail(email.trim())}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSave} style={styles.textContainer}>
        <AppText style={styles.buttonText}>Guardar</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  input: {
    padding: 10,
    paddingBottom: 4,
    borderColor: "gray",
    borderBottomWidth: 0.8,
    borderRadius: 10,
    width: "80%",
  },
  textContainer: {
    marginTop: 20,
    backgroundColor: constants.LightTheme.last,
    borderRadius: 60,
    paddingVertical: 6,
    paddingHorizontal: 14,
    width: 100,
    alignSelf: "center",
  },
  buttonText: {
    color: constants.LightTheme.primary,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
    fontSize: FontSize.s,
  },
});

export default EmailView;
