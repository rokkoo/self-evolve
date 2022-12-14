import { Image, StyleSheet, View } from "react-native";
import { useMemo } from "react";
import { EmotionalStatusEnum } from "../../../../states/zustand/types";
import { iconSource } from "../../../../lib/emotionsLib";
import AppText from "../../../../component/AppText";

interface Props {
  emotionalStatus: EmotionalStatusEnum;
}

const DailyResume: React.FC<Props> = ({ emotionalStatus }) => {
  const source = useMemo(() => {
    return iconSource(emotionalStatus);
  }, [emotionalStatus]);

  return (
    <View style={styles.container}>
      <AppText style={styles.text}> ESTE DÍA ESTABAS: </AppText>
      <Image
        style={styles.emotionalStatus}
        source={source}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginVertical: 12,
  },
  text: {
    fontSize: 20,
  },
  emotionalStatus: {
    width: 80,
    height: 80,
  },
});

export default DailyResume;
