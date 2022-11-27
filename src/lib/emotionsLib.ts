import { EmotionalStatusEnum, EmotionType } from "../states/zustand/types";

export const iconSource = (emotionalStatus: EmotionType) => {
  if (emotionalStatus === EmotionalStatusEnum.HAPPY) {
    return require(`../../assets/icons/emotions/happy.png`);
  }

  if (emotionalStatus === EmotionalStatusEnum.SAD) {
    return require(`../../assets/icons/emotions/sad.png`);
  }

  if (emotionalStatus === EmotionalStatusEnum.NEUTRAL) {
    return require(`../../assets/icons/emotions/neutral.png`);
  }

  return undefined;
};

export const emotionText = (emotionalStatus: EmotionType) => {
  if (emotionalStatus === EmotionalStatusEnum.HAPPY) {
    return "Bien";
  }

  if (emotionalStatus === EmotionalStatusEnum.SAD) {
    return "Mal";
  }

  if (emotionalStatus === EmotionalStatusEnum.NEUTRAL) {
    return "Regular";
  }

  return undefined;
};
