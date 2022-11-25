export enum StorageIdEnum {
  USER_INFO = "user-info",
}

export type StorageId = typeof StorageIdEnum[keyof typeof StorageIdEnum];
