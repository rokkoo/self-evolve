import create from "zustand";
import { EmotionType, TagType } from "../../../states/zustand/types";

interface DailyResumeState {
  emotion: EmotionType | null;
  tags: TagType[];
  note: string;

  addEmotion: (emotion: EmotionType) => void;
  toggleTag: (tag: TagType) => void;
  addNote: (note: string) => void;
  resetState: () => void;
}

const useDailyResumeState = create<DailyResumeState>((set, get) => {
  return {
    emotion: null,
    tags: [],
    note: "",

    addEmotion(emotion) {
      set((prev) => ({ ...prev, emotion }));
    },
    toggleTag(tag) {
      set((prev) => {
        const existTag = prev.tags.some((oldTags) => oldTags === tag);

        if (existTag) {
          const newTags = prev.tags.filter((oldTags) => oldTags !== tag);

          return { ...prev, tags: [...newTags] };
        }

        return { ...prev, tags: [...prev.tags, tag] };
      });
    },
    addNote(note) {
      set((prev) => ({ ...prev, note }));
    },
    resetState() {
      set((prev) => {
        return {
          ...prev,
          emotion: null,
          tags: [],
          note: "",
        };
      });
    },
  };
});

export default useDailyResumeState;
