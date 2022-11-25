import { useCallback, useRef } from "react";
import { MMKV } from "react-native-mmkv";
import { StorageId } from "../types";

function useStorage<T>(id: StorageId) {
  const storage = useRef(
    new MMKV({
      id: id,
      encryptionKey: "hunter2",
    })
  );

  const saveItem = useCallback((key: string, payload: T) => {
    storage.current.set(key, JSON.stringify(payload));
  }, []);

  const getItem = useCallback((key: string): T | null => {
    const item = storage.current.getString(key);

    if (!item) return null;

    return item as T;
  }, []);

  return {
    getItem,
    saveItem,
  };
}

export default useStorage;
