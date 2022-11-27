import { StyleSheet, View } from "react-native";
import ReactNativeCalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import useHomeCalendar from "./useHomeCalendar";
import useHomeState from "../../state/useHomeState";
import constants from "../../../../constants";

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
          borderHighlightColor: constants.LightTheme.primary,
        }}
        style={styles.calendar}
        calendarHeaderStyle={styles.calendarHeader}
        headerText="2022"
        calendarColor={constants.LightTheme.last}
        dateNumberStyle={styles.dateNumber}
        dateNameStyle={styles.dateName}
        highlightDateNumberStyle={styles.highlightDateNumber}
        highlightDateNameStyle={styles.highlightDateName}
        disabledDateNameStyle={styles.disabledDateName}
        disabledDateNumberStyle={styles.disabledDateNumber}
        datesWhitelist={datesWhitelist}
        // datesBlacklist={datesBlacklist}
        // iconLeft={require("./img/left-arrow.png")}
        // iconRight={require("./img/right-arrow.png")}
        iconContainer={{ flex: 0.1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: { 
    height: "100%",
    paddingVertical: 5,
    paddingBottom: 20 
  },
  dateNumber:{
    color: 'white',
    opacity: 1,
  },
  dateName: {
    color: 'white',
    opacity: 1,
  },
  calendarHeader:{
    color: 'white',
    paddingBottom: 8,
  },
  highlightDateNumber: {
    color: 'white',
  },
  disabledDateNumber: {
    color: constants.LightTheme.secondary,
    opacity: 0.7,
  },
  highlightDateName: {
    color: constants.LightTheme.terciary,

  },
  disabledDateName: {
    color: constants.LightTheme.terciary,
    opacity: 0.7,
  }
})
