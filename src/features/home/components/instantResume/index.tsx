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
import moment from "moment";
import AppText from "../../../../component/AppText";

interface Props {
  text: string;
  createdAt: string;
  emotionalStatus: EmotionType;
  tags: TagType[];
}

const InstantResume: React.FC<Props> = (props) => {
  const source = useMemo(() => {
    return iconSource(props.emotionalStatus);
  }, [props.emotionalStatus]);

  const date = useMemo(() => {
    return moment(props.createdAt).locale("es").format("LT");
  }, [props.createdAt]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.textAndHourContainer}>
          <AppText style={styles.hour}>{date}</AppText>
          <AppText style={styles.text}>{props.text}</AppText>
        </View>
        <Image
          style={styles.emotionalStatus}
          source={source}
          resizeMode="contain"
        />
      </View>
      <View style={styles.tagsContainer}>
        <TagsContainer tags={props.tags} />
      </View>
    </View>
  );
};

export default InstantResume;
