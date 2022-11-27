import { Image, Text, View } from "react-native";
import { useMemo } from "react";
import TagsContainer from "../tagsContainer";
import { styles } from "./styles";
import {
  EmotionalStatusEnum,
  EmotionStatus,
  TagType,
} from "../../../../states/zustand/types";
import { iconSource } from "../../../../lib/emotionsLib";

interface Props {
  text: string;
  createdAt: string;
  emotionalStatus: EmotionStatus;
  tags: TagType[];
}

const InstantResume: React.FC<Props> = (props) => {
  const source = useMemo(() => {
    return iconSource(props.emotionalStatus)
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
            source={source}
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
