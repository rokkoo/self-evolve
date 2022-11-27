import { Image, Text, View } from "react-native";
import { useMemo } from "react";
import TagsContainer from "../tagsContainer";
import { styles } from "./styles";
import {
  EmotionalStatusEnum,
  EmotionStatus,
  TagType,
} from "../../../../states/zustand/types";

interface Props {
  text: string;
  createdAt: string;
  emotionalStatus: EmotionStatus;
  tags: TagType[];
}

const InstantResume: React.FC<Props> = (props) => {
  const iconSource = useMemo(() => {
    if (props.emotionalStatus === EmotionalStatusEnum.HAPPY) {
      return require(`../../../../../assets/icons/emotions/happy.png`);
    }

    if (props.emotionalStatus === EmotionalStatusEnum.SAD) {
      return require(`../../../../../assets/icons/emotions/sad.png`);
    }

    if (props.emotionalStatus === EmotionalStatusEnum.NEUTRAL) {
      return require(`../../../../../assets/icons/emotions/neutral.png`);
    }

    return undefined;
  }, [props.emotionalStatus]);

  console.log(props.emotionalStatus);
  return (
    <View style={styles.container}>
        <View style={styles.row}>
        <View style={styles.left}>
            <Text style={styles.hour}>{props.createdAt}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </View>
        <View style={styles.right}>
            <Image
            style={styles.emotionalStatus}
            source={iconSource}
            resizeMode="contain"
            />
        </View>
        </View>
        <View style={styles.tagsBox}>
        <TagsContainer tags={props.tags} />
        </View>
    </View>
  );
};

export default InstantResume;
