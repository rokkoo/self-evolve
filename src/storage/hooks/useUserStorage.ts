import { useCallback } from "react";
import { StorageIdEnum } from "../types";
import { User } from "../types/user";
import useStorage from "./useStorage";

interface UseUserStorage {
  user: User;
}

const useUserStorage = () => {
  const { saveItem, getItem } = useStorage(StorageIdEnum.USER_INFO);

  const saveUserData = useCallback((data: User) => {
    saveItem("user", data);
  }, []);

  const getUserData = useCallback((): User | null => {
    const user = getItem("user");

    if (!user) return null;

    return JSON.parse(user as string);
  }, []);

  return {
    saveUserData,
    getUserData,
  };
};

export default useUserStorage;
