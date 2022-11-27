export interface User {
  name: string;
}

export enum EmotionalStatusEnum {
  HAPPY = "happy",
  SAD = "sad",
  NEUTRAL = "neutral",
}

export type EmotionStatus =
  typeof EmotionalStatusEnum[keyof typeof EmotionalStatusEnum];

export enum TagsEnum {
  DOSPORT = "dosport",
  TAKEANAP = "takeanap",
}

export type TagType = typeof TagsEnum[keyof typeof TagsEnum];

export interface ResumePost {
  createdAt: string;
  id: string;
  emotion: EmotionStatus | null;
  tags: TagType[];
  note: string | null;
}
