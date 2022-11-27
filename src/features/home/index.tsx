import { View } from "react-native";
import AppLayoutScrollView from "../../component/AppLayoutScrollView";
import DailyContainer from "./components/dailyContainer";
import Header from "./components/header";
import HomeCalendar from "./components/homeCalendar";
import InsertDailyButton from "./components/insertDailyButton";
import { styles } from "./styles";

const Home = () => {
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
