export enum StorageIdEnum {
  USER_INFO = "user-info",
  USER_POSTS = "user-posts",
}

export type StorageId = typeof StorageIdEnum[keyof typeof StorageIdEnum];
