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
  const { user } = useUserData();
  const { posts } = useUserResumePost();

  console.log({ posts });

  const saraut = useMemo(() => {
    if (user.name != "") return `¡Hola, ${user.name}!`;
    return "¡Hola!";
  }, [user]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.top}>
        <Text>{saraut}</Text>
        <View style={styles.verticleLine}></View>
        <Text style={styles.year}>2022</Text>
      </View>
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
