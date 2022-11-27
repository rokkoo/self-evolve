import { Image, Text, View } from "react-native";
import { useMemo } from "react";
import TagsContainer from "../tagsContainer";
import { styles } from "./styles";
import {
  EmotionalStatusEnum,
  EmotionType,
  TagType,
} from "../../../../states/zustand/types";
import { iconSource } from "../../../../lib/emotionsLib";

interface Props {
  text: string;
  createdAt: string;
  emotionalStatus: EmotionType;
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
            <View style={styles.textAndHourContainer}>
            <Text style={styles.hour}>{props.createdAt}</Text>
            <Text style={styles.text}>{props.text}</Text>

            </View>
            <Image
            style={styles.emotionalStatus}
            source={source}
            resizeMode="contain"
            />
        </View>
        <View style={styles.row}>
        </View>
    </View>
  );
};

export default InstantResume;
