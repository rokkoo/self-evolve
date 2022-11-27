import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

import LocalStorage from "../../../storage/instances/localStorage";
import { StorageIdEnum } from "../../../storage/types";

import { EmotionStatus, ResumePost, TagType } from "../types";
import moment from "moment";

const localStorage = new LocalStorage(StorageIdEnum.USER_POSTS);

interface Post {
  emotion: EmotionStatus | null;
  tags?: TagType[];
  note?: string | null;
}

interface InitialState {
  posts: ResumePost[];
  addNewPost: (post: Post) => void;
}

type MyPersist = (
  config: StateCreator<InitialState>,
  options: PersistOptions<InitialState>
) => StateCreator<InitialState>;

const useUserResumePostStore = create<InitialState>(
  (persist as MyPersist)(
    (set, get) => ({
      posts: [],

      addNewPost: (post) => {
        // UTC time
        const createdAt = moment().toISOString();

        console.log({ createdAt });

        set((prev) => {
          return {
            ...prev,
            posts: [
              ...prev.posts,
              {
                id: uuidv4(),
                createdAt,
                ...post,
              },
            ],
          };
        });
      },
    }),
    {
      name: `zustand-${StorageIdEnum.USER_POSTS}`, // unique name
      getStorage: () => localStorage,
    }
  )
);

export default useUserResumePostStore;
