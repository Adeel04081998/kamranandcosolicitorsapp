import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CustomStyles from "../../components/CustomStyles";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/Colors";
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';

const listTab = [
  {
    status: "All",
  },
  {
    status: "Pending",
  },
  {
    status: "Completed",
  },
];

const data = [
  {
    date: "Sun 24 May 2023",
    title: "This is task 1 title",
    assigned_to: "Anil Sanchana",
    description: "This is the description of the task.",
    status: "Pending",
  },
  {
    date: "Sun 24 May 2023",
    title: "This is task 2 title",
    assigned_to: "Rabeeha Ahmed",
    description: "This is the description of the task.",
    status: "Completed",
  },
  {
    date: "Sun 24 May 2023",
    title: "This is task 3 title",
    assigned_to: "Anil Sanchana",
    description: "This is the description of the task.",
    status: "Pending",
  },
];

export default function TasksScreen(props) {
  const navigation = useNavigation();

  const [status, setStatus] = useState("All");

  const [datalist, setDatalist] = useState(data);

  function setStatusFilter(status) {
    if (status == "All") {
      setDatalist(data);
    } else {
      setDatalist([...data.filter((e) => e.status === status)]);
    }

    setStatus(status);
  }

  function renderItem({ item, index }) {
    return (
      <TouchableOpacity key={index} style={styles.itemContainer} onPress={() => alert(`task pressed. ${item.title}`)}>
        <View style={[styles.itemCell, styles.itemDateCell]}>
          <Text>{item.date}</Text>
          {
            item.status === "Completed" ?
            <Text style={{textAlign:'center', marginTop:4}}><MaterialIcons name="check-circle" size={20} color={Colors.GREEN} /></Text> :
            null
          }
        </View>
        <View style={[styles.itemCell, styles.itemTitleCell]}>
          <Text style={styles.itemTitleText}>{item.title}</Text>
          <Text style={styles.itemAssignText}><Text style={{fontWeight: 'bold'}}>Assinged to:</Text> {item.assigned_to}</Text>
        </View>
        {/* <View
          style={[
            styles.itemStatus,
            {
              backgroundColor: item.status === "Pending" ? Colors.PINK : Colors.GOLD,
            },
          ]}
        >
          <Text>{item.status}</Text>
        </View> */}
      </TouchableOpacity>
    );
  }

  function separator() {
    return (
      <View style={{height:1, backgroundColor: Colors.LIGHTGRAY}} />
    );
  }

  return (
    <SafeAreaView style={CustomStyles.safeAreaView}>
      <View style={CustomStyles.contentAreaContainer}>
        <View style={styles.listTab}>
          {listTab.map((e, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.btnTab,
                status === e.status && styles.btnTabActive,
              ]}
              onPress={() => setStatusFilter(e.status)}
            >
              <Text
                style={[
                  styles.textTab,
                  status === e.status && styles.textTabActive,
                ]}
              >
                {e.status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          data={datalist}
          keyExtractor={(e, i) => i.toString()}
          renderItem={renderItem}
          // ItemSeparatorComponent={separator}
          alwaysBounceVertical='false'
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 6,
  },
  btnTab: {
    width: Dimensions.get("window").width / 3,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: Colors.DARKGOLD,
    padding: 10,
    justifyContent: "center",
  },
  textTab: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  btnTabActive: {
    backgroundColor: Colors.GOLD,
    color: Colors.WHITE,
  },
  textTabActive: {
    color: Colors.BLACK,
  },
  itemContainer: {
    flexDirection: "row",
  },
  itemCell: {
    margin: '1%',
    padding: 10,
  },
  itemDateCell: {
    width: '21.5%',
    backgroundColor: Colors.LIGHTGRAY,
  },
  itemTitleCell: {
    width: '75.5%',
    marginLeft: 0,
    backgroundColor: Colors.LIGHTGRAY,
    justifyContent:'space-between',
  },
  itemTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemAssignText: {
    color: Colors.GRAY,
  },
  itemStatus: {
    paddingHorizontal: 6,
    justifyContent: "center",
  },
});
