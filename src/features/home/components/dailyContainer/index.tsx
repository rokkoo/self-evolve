import { StyleSheet, View } from "react-native";
import { EmotionalStatusEnum } from "../../types";
import DailyResume from "../dailyResume";
import InstantResume from "../instantResume";
import { TagsEnum } from "../tagsContainer/types";

const DailyContainer = () => {
  return (
    <View style={styles.container}>
      
      <DailyResume emotionalStatus={EmotionalStatusEnum.NEUTRAL} />

      <InstantResume
        text="Me fui a jugar al futbol con mi primo y me pelee con el."
        createdAt="10:04 AM"
        emotionalStatus={EmotionalStatusEnum.HAPPY}
        tags={[TagsEnum.DOSPORT, TagsEnum.TAKEANAP]}
      />

      <InstantResume
        text="He ido a comprar el pan."
        createdAt="17:56 PM"
        emotionalStatus={EmotionalStatusEnum.SAD}
        tags={[
          TagsEnum.DOSPORT,
          TagsEnum.TAKEANAP,
          TagsEnum.DOSPORT,
          TagsEnum.TAKEANAP,
          TagsEnum.DOSPORT,
          TagsEnum.TAKEANAP,
          
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
  }
})

export default DailyContainer;
