import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export enum FlowEnum {
  Onboarding = "Onboarding",
  Home = "Home",
}

export type FlowName = typeof FlowEnum[keyof typeof FlowEnum];

type StackParamList = {
  [FlowEnum.Onboarding]: undefined; // any prop on spected
  [FlowEnum.Home]: undefined;
};

export type AppNavigationProps = NativeStackNavigationProp<StackParamList>;
