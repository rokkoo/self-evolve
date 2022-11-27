import create from "zustand";
import { EmotionStatus, TagType } from "../../../states/zustand/types";

interface DailyResumeState {
  emotion: EmotionStatus | null;
  tags: TagType[];
  note: string | null;

  addEmotion: (emotion: EmotionStatus) => void;
  toggleTag: (tag: TagType) => void;
  addNote: (note: string) => void;
}

const useDailyResumeState = create<DailyResumeState>((set, get) => {
  return {
    emotion: null,
    tags: [],
    note: null,

    addEmotion(emotion) {
      set((prev) => ({ ...prev, emotion }));
    },
    toggleTag(tag) {
      set((prev) => {
        const existTag = prev.tags.some((oldTags) => oldTags === tag);

        console.log({ existTag });

        if (existTag) {
          const newTags = prev.tags.filter((oldTags) => oldTags !== tag);
          console.log({ newTags });

          return { ...prev, tags: [...newTags] };
        }

        return { ...prev, tags: [...prev.tags, tag] };
      });
    },
    addNote(note) {
      set((prev) => ({ ...prev, note }));
    },
  };
});

export default useDailyResumeState;
