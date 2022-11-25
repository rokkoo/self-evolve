import { useCallback, useEffect } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { hasHardwareAsync } from "expo-local-authentication";
import { StyleSheet } from "react-native";

import useUserData from "../../states/zustand/hooks/useUserData";
import Header from "../../../components/header/Header";
import TextOnboarding from "../../../components/onboarding/TextOnboarding";

const Onboarding = () => {
  const { saveUserData, user } = useUserData();

  const handleSave = useCallback(() => {
    const user = { name: "alfonso" };
    saveUserData(user);
  }, []);

  useEffect(() => {
    const init = async () => {
      try {
        const compatible = await hasHardwareAsync();

        console.log({ compatible });
      } catch (error) {
        console.log({ error });
      }
    };

    init();
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.upside_container}>
          <Header></Header>
          <TextOnboarding text="Bienvenido,
          Esta aplicación te servirá para adquirir consciencia sobre tus emociones en tu día a día. Con ella podrás tener un calendario con el histórico de tu estado emocional, podrás expresar como te sientes, decir lo que has hecho en el día y ver diferentes gráficas para analizar tus estados de animo.  "/>
          <Text style={{margin:20}}>Para una experiencia personalizada, puedes introducir tu nombre:</Text>
          <TextInput
            style={styles.input}
            value={"Nombre..."}
          />
        </View>
        <View style={styles.bottom_container}>
          
          <View>
              <Text>SALTAR</Text>
            </View>

          <View style={styles.verticleLine}></View>

          <View>
            <Text>SIGUIENTE</Text>
          </View>
            
        </View>
      </View>
  );
};

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

export default Onboarding;
