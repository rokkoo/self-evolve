import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PostType } from "../states/zustand/types";

export enum FlowEnum {
  Onboarding = "Onboarding",
  Home = "Home",
  DailyResumePost = "DailyResumePost",
}

export type FlowName = typeof FlowEnum[keyof typeof FlowEnum];

export type StackParamList = {
  [FlowEnum.Onboarding]: undefined; // any prop on spected
  [FlowEnum.Home]: undefined;
  [FlowEnum.DailyResumePost]: { type: PostType };
};

export type AppNavigationProps = NativeStackNavigationProp<StackParamList>;
