import { useCallback, useRef } from "react";
import { MMKV } from "react-native-mmkv";
import { StorageId } from "../types";

const useStorage = (id: StorageId) => {
  const storage = useRef(
    new MMKV({
      id: id,
      encryptionKey: "hunter2",
    })
  );

  const saveItem = useCallback((key: string, payload: any) => {
    storage.current.set(key, JSON.stringify(payload));
  }, []);

  const getItem = useCallback((key: string) => {
    const item = storage.current.getString(key);

    if (!item) return null;

    return item;
  }, []);

  return {
    getItem,
    saveItem,
  };
};

export default useStorage;
