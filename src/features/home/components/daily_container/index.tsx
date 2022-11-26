import { View } from "react-native";
import DailyResume from "../daily_resume";
import InstantResume, { EmotionalStatusEnum } from "../instant_resume";
import { TagsEnum } from "../tags_container/types";

const DailyContainer = () => {
  return (
    <View>
      <DailyResume />

      <InstantResume
        text="Me fui a jugar al futbol con mi primo y me pelee con el."
        createdAt="10:04 AM"
        emotionalStatus={EmotionalStatusEnum.HAPPY}
        tags={[TagsEnum.DOSPORT, TagsEnum.TAKEANAP]}
      />

      <InstantResume
        text="He ido a comprar el pan."
        createdAt="17:56 PM"
        emotionalStatus={EmotionalStatusEnum.HAPPY}
        tags={[
          TagsEnum.DOSPORT,
          TagsEnum.TAKEANAP,
          TagsEnum.TAKEANAP,
          TagsEnum.TAKEANAP,
          TagsEnum.TAKEANAP,
          TagsEnum.TAKEANAP,
          TagsEnum.TAKEANAP,
        ]}
      />
    </View>
  );
};

export default DailyContainer;
