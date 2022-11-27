import create from "zustand";
import { EmotionStatus, TagType } from "../../../states/zustand/types";

interface DailyResumeState {
  emotion: EmotionStatus | null;
  tags: TagType[];
  note: string | null;

  addEmotion: (emotion: EmotionStatus) => void;
  addTag: (tag: TagType) => void;
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
    addTag(tag) {
      set((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
    },
    addNote(note) {
      set((prev) => ({ ...prev, note }));
    },
  };
});

export default useDailyResumeState;
