import { useMemo } from "react";
import { Image, Text, View } from "react-native";
import AppLayoutScrollView from "../../component/AppLayoutScrollView";
import useUserData from "../../states/zustand/hooks/useUserData";
import useUserResumePost from "../../states/zustand/hooks/useUserResumePost";
import DailyContainer from "./components/dailyContainer";
import Header from "./components/header";
import HomeCalendar from "./components/homeCalendar";
import InsertDailyButton from "./components/insertDailyButton";
import { styles } from "./styles";

const Home = () => {
  const { posts } = useUserResumePost();

  console.log({ posts });

  return (
    <View style={styles.container}>
      <Header />
      
      <View style={styles.calendar}>
        <HomeCalendar />
      </View>
      <InsertDailyButton />
      <AppLayoutScrollView>
        <DailyContainer />
      </AppLayoutScrollView>
    </View>
  );
};

export default Home;
