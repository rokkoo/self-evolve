
export enum EmotionalStatusEnum {
    HAPPY = 'happy',
    SAD = 'sad',
    NEUTRAL = 'neutral'
}

export type EmotionStatus = typeof EmotionalStatusEnum[keyof typeof EmotionalStatusEnum]
