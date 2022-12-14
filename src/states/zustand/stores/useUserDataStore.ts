import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

import { User } from "../types";
import LocalStorage from "../../../storage/instances/localStorage";
import { StorageIdEnum } from "../../../storage/types";

const localStorage = new LocalStorage(StorageIdEnum.USER_INFO);

interface InitialState {
  user: User;
  onboardingPasses: boolean;
  enablePasscode: boolean;

  saveUserData(user: User): void;
  onboardingSeen: () => void;
  togglePasscode: () => void;
}

type MyPersist = (
  config: StateCreator<InitialState>,
  options: PersistOptions<InitialState>
) => StateCreator<InitialState>;

const useUserStore = create<InitialState>(
  (persist as MyPersist)(
    (set, get) => ({
      user: {
        name: "",
      },
      enablePasscode: false,
      onboardingPasses: false,
      saveUserData: (user) => {
        set((prev) => {
          return { ...prev, user: { ...prev.user, ...user } };
        });
      },
      onboardingSeen: () => {
        set({ onboardingPasses: true });
      },
      togglePasscode() {
        set((prev) => {
          return {
            ...prev,
            enablePasscode: !prev.enablePasscode,
          };
        });
      },
    }),
    {
      name: `zustand-${StorageIdEnum.USER_INFO}`, // unique name
      getStorage: () => localStorage,
    }
  )
);

export default useUserStore;
