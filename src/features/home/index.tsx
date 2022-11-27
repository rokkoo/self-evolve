import { View } from "react-native";
import AppLayoutScrollView from "../../component/AppLayoutScrollView";
import DailyContainer from "./components/dailyContainer";
import FloatingButtons from "./components/floatingButtons";
import Header from "./components/header";
import HomeCalendar from "./components/homeCalendar";
import { styles } from "./styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.calendar}>
        <HomeCalendar />
      </View>
      <AppLayoutScrollView>
        <DailyContainer />
      </AppLayoutScrollView>
      <FloatingButtons />
    </View>
  );
};

export default Home;
