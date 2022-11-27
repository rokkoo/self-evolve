import { useCallback, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AppLayout from "../../component/AppLayout";
import AppLayoutScrollView from "../../component/AppLayoutScrollView";
import AppText from "../../component/AppText";
import { FontSize } from "../../constants/metrics";
import { TagsEnum, TagType } from "../../states/zustand/types";
import TagsContainer from "../home/components/tagsContainer";
import EmotionalStateSelector from "./components/emotionalStateSelector";
import Header from "./components/header";
import useDailyResumeState from "./state/useDailyResumeState";

const DailyResumePost = () => {
  const { tags, toggleTag, addNote, note } = useDailyResumeState();

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
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={note ?? ""}
              onChangeText={addNote}
              placeholder="Que te ha hecho sentir asi?"
              placeholderTextColor={"grey"}
              multiline={true}
            />
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
    paddingTop: 28,
    paddingBottom: 14,
  },
  inputContainer: {
    width: "100%",
    borderColor: "#B2B2B2",
    borderWidth: 1,
    borderRadius: 10,
    // paddingVertical: 40,
    minHeight: 60,
    alignItems: "flex-start",
  },
  input: {
    // flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    // borderColor: "#B2B2B2",
    borderWidth: 0,
    width: "100%",
    // backgroundColor: "red",
  },
  saveButton: {
    width: "100%",
    paddingVertical: 30,
  },
});

export default DailyResumePost;
