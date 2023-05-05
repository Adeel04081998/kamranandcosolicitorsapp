import { SafeAreaView, View, StyleSheet } from "react-native";
import CustomStyles from "../../components/CustomStyles";
import { useNavigation } from "@react-navigation/native";
import { Calendar } from "react-native-calendars";
import Colors from "../../utils/Colors";

export default function AddBookingScreen(props) {
  const navigation = useNavigation();

  const redDot = {
    key: "redDot",
    color: Colors.RED,
    selectedDotColor: Colors.RED,
  };

  return (
    <SafeAreaView style={CustomStyles.safeAreaView}>
      <View style={CustomStyles.contentAreaContainer}>
        <Calendar
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          onDayLongPress={(day) => {
            console.log("selected day", day);
          }}
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          displayLoadingIndicator={false}
          markingType={"multi-dot"}
          markedDates={{
            "2023-03-15": {
              selected: true,
              marked: true,
              dots: [redDot],
            },
            "2023-03-16": { selected: true, disabled: true, marked: true },
            "2023-03-18": { marked: true, dots: [redDot] },
            "2023-03-19": { selected: true, activeOpacity: 0 },
          }}
          firstDay={1}
          theme={{
            selectedDayBackgroundColor: Colors.GOLD,
            selectedDayTextColor: Colors.BLACK,
            todayTextColor: Colors.DARKGOLD,
            dayTextColor: Colors.GRAY,
            textDisabledColor: Colors.LIGHTGRAY,
            dotColor: Colors.RED,
            selectedDotColor: Colors.RED,
            arrowColor: Colors.DARKGOLD,
            disabledArrowColor: Colors.LIGHTERGRAY,
            monthTextColor: Colors.GRAY,
            indicatorColor: Colors.DARKGOLD,
            textDayFontWeight: "400",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "700",
            textDayFontSize: 16,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14,
            "stylesheet.calendar.header": {
              dayTextAtIndex5: {
                color: Colors.GOLD,
              },
              dayTextAtIndex6: {
                color: Colors.GOLD,
              },
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
  }
});
