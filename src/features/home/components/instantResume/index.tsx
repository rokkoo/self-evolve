import { StyleSheet, Text, View } from "react-native";
import TagsContainer from "../tagsContainer";
import { TagType, TagsEnum } from "../tagsContainer/types";
import { styles } from "./styles";

export enum EmotionalStatusEnum {
  HAPPY = "happy",
  SAD = "sad",
}

export type EmotionStatus =
  typeof EmotionalStatusEnum[keyof typeof EmotionalStatusEnum];

interface Props {
  text: string;
  createdAt: string;
  emotionalStatus: EmotionStatus;
  tags: TagType[];
}

const InstantResume: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Text style={styles.hour}>{props.createdAt}</Text>
          <Text style={styles.text}>{props.text}</Text>
        </View>
        <View style={styles.right}>
          <View style={styles.emotionalStatus}></View>
        </View>
      </View>
      <View style={styles.tagsbox}>
        <TagsContainer tags={props.tags} />
      </View>
    </View>
  );
};

export default InstantResume;
