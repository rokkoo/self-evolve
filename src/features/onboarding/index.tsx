import { useCallback, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";
import Header from "../../../components/header/Header";
import TextOnboarding from "../../../components/onboarding/TextOnboarding";
import useOnboarding from "./hooks/useOnboarding";
import useOnboardingActions from "./hooks/useOnboardingActions";
import AppLayoutScrollView from "../../component/AppLayoutScrollView";

const Onboarding = () => {
  const { handleInputChange, username } = useOnboarding();
  const { handleNextPress, handleDismiss } = useOnboardingActions();

  return (
    <AppLayoutScrollView>
      <View style={styles.upside_container}>
        <Header />
        <TextOnboarding
          text="Bienvenido,
          Esta aplicación te servirá para adquirir consciencia sobre tus emociones en tu día a día. Con ella podrás tener un calendario con el histórico de tu estado emocional, podrás expresar como te sientes, decir lo que has hecho en el día y ver diferentes gráficas para analizar tus estados de animo.  "
        />
        <Text style={{ margin: 20 }}>
          Para una experiencia personalizada, puedes introducir tu nombre:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={handleInputChange}
            placeholder="Name"
            maxLength={12}
            scrollEnabled={false}
          />
        </View>
      </View>
      <View style={styles.bottom_container}>
        <TouchableOpacity onPress={handleDismiss}>
          <Text>SALTAR</Text>
        </TouchableOpacity>

        <View style={styles.verticleLine}></View>

        <TouchableOpacity onPress={() => handleNextPress(username)}>
          <Text>SIGUIENTE</Text>
        </TouchableOpacity>
      </View>
    </AppLayoutScrollView>
  );
};

export default Onboarding;
