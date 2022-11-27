import { useCallback, useMemo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AppLayout from "../../component/AppLayout";
import AppLayoutScrollView from "../../component/AppLayoutScrollView";
import AppText from "../../component/AppText";
import SaveButton from "../../component/SaveButton";
import { FontSize } from "../../constants/metrics";
import useAppNavigation from "../../navigation/hooks/useAppNavigation";
import { FlowEnum } from "../../navigation/types";
import useUserResumePost from "../../states/zustand/hooks/useUserResumePost";
import {
  EmotionalStatusEnum,
  TagsEnum,
  TagType,
} from "../../states/zustand/types";
import TagsContainer from "../home/components/tagsContainer";
import useSmthElse from "../home/hooks/useSmthElsePost";
import EmotionalStateSelector from "./components/emotionalStateSelector";
import Header from "./components/header";
import useDailyResumeState from "./state/useDailyResumeState";

const DailyResumePost = () => {
  const { handleSmthElseInputChange, smthElse } = useSmthElse();
  const { navigation } = useAppNavigation();
  const { addNewPost } = useUserResumePost();
  const { tags, toggleTag } = useDailyResumeState();

  const handlePress = useCallback(() => {
    addNewPost({
      emotion: EmotionalStatusEnum.HAPPY,
      // tags: []
    });
    navigation.navigate(FlowEnum.DailyResumePost);
  }, []);

  const onTagPress = useCallback((tag: TagType) => {
    toggleTag(tag);
  }, []);

  const availableTags = useMemo(() => {
    const tags = Object.values(TagsEnum);

    return tags;
  }, []);

  return (
    <AppLayout>
      <Header />
      <AppLayoutScrollView>
        <View style={styles.container}>
          <AppText
            style={styles.text}
            children={"¿Cómo te sientes?"}
            fontSize={FontSize.l}
          />
          <EmotionalStateSelector />
          <AppText
            style={styles.text}
            children={"Durante el día:"}
            fontSize={FontSize.l}
          />
          <TagsContainer
            tags={availableTags}
            selectedTags={tags}
            onTagPress={onTagPress}
          />
          <AppText
            style={styles.text}
            children={"Algo que añadir:"}
            fontSize={FontSize.l}
          />
          <TextInput
            style={styles.input}
            value={smthElse}
            onChangeText={handleSmthElseInputChange}
            placeholder="Hoy ha sido un dia estupendo en familia, hemos ido a comer langosta al centro, subido en uno de nuestros yates mas lujosos y emprendido rumbo a Honolulu. Alli nos esperaba nuestro amigo Pepe..."
            placeholderTextColor={"grey"}
            multiline={true}
          />
          <View style={styles.saveButton}>
            <SaveButton />
          </View>
        </View>
      </AppLayoutScrollView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    paddingVertical: 20,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: "gray",
    borderBottomWidth: 0.8,
    borderRadius: 10,
    alignSelf: "center",
  },
  saveButton: {
    width: "100%",
    paddingVertical: 30,
  },
});

export default DailyResumePost;
