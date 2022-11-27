export interface User {
  name: string;
}

export enum EmotionalStatusEnum {
  HAPPY = "happy",
  SAD = "sad",
  NEUTRAL = "neutral",
}

export type EmotionType =
  typeof EmotionalStatusEnum[keyof typeof EmotionalStatusEnum];

export enum TagsEnum {
  DOSPORT = "dosport",
  TAKEANAP = "takeanap",
}

export type TagType = typeof TagsEnum[keyof typeof TagsEnum];

export enum PostTypeEnum {
  INSTAN = "instant",
  RESUME = "resume",
}
export type PostType = typeof PostTypeEnum[keyof typeof PostTypeEnum];

export interface Post {
  emotion: EmotionType;
  tags: TagType[];
  note: string;
  type: PostType;
}

export interface ResumePost {
  createdAt: string;
  id: string;
}
