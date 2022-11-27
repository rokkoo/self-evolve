import create from "zustand";

interface DailyResumeState {
  homeDate: string | null;

  changeDate: (date: string) => void;
}

const useHomeState = create<DailyResumeState>((set, get) => {
  return {
    homeDate: null,

    changeDate(date) {
      set((prev) => ({ ...prev, homeDate: date }));
    },
  };
});

export default useHomeState;
