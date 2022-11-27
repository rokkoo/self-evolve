import { View } from "react-native";
import AppLayout from "../../component/AppLayout";
import AppLayoutScrollView from "../../component/AppLayoutScrollView";
import AppText from "../../component/AppText";

const DailyResumePost = () => {
  return (
    <AppLayout>
      <AppLayoutScrollView>
        <View>
          <AppText>App status</AppText>
        </View>
      </AppLayoutScrollView>
    </AppLayout>
  );
};

export default DailyResumePost;
