import { EmotionalStatusEnum, EmotionStatus } from "../states/zustand/types";

export const iconSource = (emotionalStatus: EmotionStatus) => {
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
      }
