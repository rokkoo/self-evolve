import { Image, StyleSheet, Text, View } from "react-native";
import { useMemo } from "react";
import { EmotionalStatusEnum } from "../../../../states/zustand/types";

interface Props {
  emotionalStatus: EmotionalStatusEnum;
}

const DailyResume: React.FC<Props> = ({ emotionalStatus }) => {
  const iconSource = useMemo(() => {
    if (emotionalStatus === EmotionalStatusEnum.HAPPY) {
      return require(`../../../../../assets/icons/emotions/happy.png`);
    }

    if (emotionalStatus === EmotionalStatusEnum.SAD) {
      return require(`../../../../../assets/icons/emotions/sad.png`);
    }

    if (emotionalStatus === EmotionalStatusEnum.NEUTRAL) {
      return require(`../../../../../assets/icons/emotions/neutral.png`);
    }

    return undefined;
  }, [emotionalStatus]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> ESTE DÍA ESTABAS: </Text>
      <Image
        style={styles.emotionalStatus}
        source={iconSource}
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
