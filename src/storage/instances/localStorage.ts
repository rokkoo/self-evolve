import { MMKV } from "react-native-mmkv";
import { StorageId } from "../types";

class LocalStorage {
  storage: MMKV;

  constructor(id: StorageId) {
    this.storage = new MMKV({
      id,
      encryptionKey: "hunter2",
    });
  }

  clear() {
    this.storage.clearAll();
  }
  getItem(key: string): string | null {
    const item = this.storage.getString(key);

    if (!item) return null;

    return item;
  }
  removeItem(key: string): void {
    this.storage.delete(key);
  }
  setItem(key: string, value: string): void {
    this.storage.set(key, value);
  }
}

export default LocalStorage;
