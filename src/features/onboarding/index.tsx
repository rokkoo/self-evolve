import { ImageBackground, TextInput, View } from "react-native";
import { styles } from "./styles";
import Header from "./components/header/Header";
import useOnboarding from "./hooks/useOnboarding";
import AppLayoutScrollView from "../../component/AppLayoutScrollView";
import BottomButtons from "./components/bottomButtons";
import AppLayout from "../../component/AppLayout";
import { MAX_NAME_LENGTH } from "../../constants/app";
import AppText from "../../component/AppText";
import { FontSize } from "../../constants/metrics";

const Onboarding = () => {
  const { handleInputChange, username } = useOnboarding();

  return (
    <ImageBackground
      source={require("../../../assets/onBoardingBackground.png")}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <AppLayout>
        <AppLayoutScrollView style={{ flex: 1 }}>
          <View style={styles.upsideContainer}>
            <Header />
            <View style={styles.downsideContainer}>
              <AppText bold fontSize={FontSize.xl} style={styles.title}>
                ¡Bienvenido!
              </AppText>
              <AppText fontSize={FontSize.l} style={styles.title}>
                Bienvenido, Esta aplicación te servirá para adquirir consciencia
                sobre tus emociones en tu día a día. Con ella podrás tener un
                calendario con el histórico de tu estado emocional, podrás
                expresar como te sientes, decir lo que has hecho en el día y ver
                diferentes gráficas para analizar tus estados de animo.
              </AppText>
              <AppText fontSize={FontSize.l}>
                Para una experiencia personalizada, puedes introducir tu nombre:
              </AppText>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value={username}
                  onChangeText={handleInputChange}
                  placeholder="Name"
                  maxLength={MAX_NAME_LENGTH}
                  scrollEnabled={false}
                />
              </View>
            </View>
          </View>
          <BottomButtons username={username}></BottomButtons>
        </AppLayoutScrollView>
      </AppLayout>
    </ImageBackground>
  );
};

export default Onboarding;
