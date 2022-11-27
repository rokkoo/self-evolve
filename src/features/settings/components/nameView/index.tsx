import { useCallback, useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import AppText from "../../../../component/AppText";
import constants from "../../../../constants";
import { MAX_NAME_LENGTH } from "../../../../constants/app";
import { FontSize } from "../../../../constants/metrics";
import useAppNavigation from "../../../../navigation/hooks/useAppNavigation";
import useUserData from "../../../../states/zustand/hooks/useUserData";

const NameView = () => {
  const { user, saveUserData } = useUserData();
  const [userName, setUsername] = useState(user.name);
  const { navigation } = useAppNavigation();

  const handleSave = useCallback(() => {
    if (!userName || userName === user.name) {
      return Toast.show({
        position: "bottom",
        type: "error",
        text1: "Introduce un nombre",
      });
    }

    saveUserData({ name: userName.trim() });
    Toast.show({
      position: "bottom",
      text1: "Guardado",
    });

    navigation.goBack();
  }, [userName, user]);

  return (
    <View>
      <AppText fontSize={FontSize.l} style={{ fontWeight: "600" }}>
        Cambia tu nombre
      </AppText>
      <TextInput
        value={userName}
        placeholder="name"
        onChangeText={setUsername}
        style={styles.input}
        maxLength={MAX_NAME_LENGTH}
      />
      <TouchableOpacity onPress={handleSave} style={styles.container}>
        <AppText style={styles.buttonText}>Guardar</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingBottom: 4,
    borderColor: "gray",
    borderBottomWidth: 0.8,
    borderRadius: 10,
    width: "80%",
  },
  container: {
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

export default NameView;
