import { View } from "react-native";
import ReactNativeCalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import useHomeCalendar from "./useHomeCalendar";
import useHomeState from "../../state/useHomeState";

export default function HomeCalendar() {
  const { datesWhitelist, handleDateChange } = useHomeCalendar();

  return (
    <View>
      <ReactNativeCalendarStrip
        onDateSelected={handleDateChange}
        calendarAnimation={{ type: "sequence", duration: 30 }}
        daySelectionAnimation={{
          type: "border",
          duration: 200,
          borderWidth: 1,
          borderHighlightColor: "white",
        }}
        style={{ height: "100%", paddingVertical: 5, paddingBottom: 20 }}
        calendarHeaderStyle={{ color: "white", paddingBottom: 8 }}
        headerText="2022"
        calendarColor={"#7743CE"}
        dateNumberStyle={{ color: "white" }}
        dateNameStyle={{ color: "white" }}
        highlightDateNumberStyle={{ color: "yellow" }}
        highlightDateNameStyle={{ color: "yellow" }}
        disabledDateNameStyle={{ color: "grey" }}
        disabledDateNumberStyle={{ color: "grey" }}
        datesWhitelist={datesWhitelist}
        // datesBlacklist={datesBlacklist}
        // iconLeft={require("./img/left-arrow.png")}
        // iconRight={require("./img/right-arrow.png")}
        iconContainer={{ flex: 0.1 }}
      />
    </View>
  );
}
