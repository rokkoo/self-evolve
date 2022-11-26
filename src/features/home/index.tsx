import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLayoutScrollView from "../../component/AppLayoutScrollView";
import useUserData from "../../states/zustand/hooks/useUserData";
import DailyContainer from "./components/dailyContainer";
import { styles } from "./styles";

const Home = () => {
  const { user } = useUserData();

  const saraut = useMemo(() => {
    if (user.name != "") return `¡Hola, ${user.name}!`;
    return "¡Hola!";
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>{saraut}</Text>
        <View style={styles.verticleLine}></View>
        <Text style={styles.year}>2022</Text>
      </View>
      <View style={styles.calendar}></View>
      <AppLayoutScrollView>
        <DailyContainer />
      </AppLayoutScrollView>
    </View>
  );
};

export default Home;
