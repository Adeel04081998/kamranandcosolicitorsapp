import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from "react-native";
import Colors from "../../Utils/Colors";
import { Dropdown } from "react-native-element-dropdown";
import BtnPrimary from "../../Components/BtnPrimary";
import { Formik } from "formik";
import * as Yup from "yup";
import Spinner from "react-native-loading-spinner-overlay";
import axios from "axios";
import { BASE_URL } from "../../config";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'moment';

const taskSchema = Yup.object().shape({
  taskTitle: Yup.string()
    .max(50, "Task title is too long!")
    .required("Please enter task title."),
  taskDescription: Yup.string()
    .max(500, "Task decription is too long!")
    .required("Please enter task description."),
  taskDueDate: Yup.string().required("Please select task due date."),
  taskAssignTo: Yup.string().required("Please select task assignee."),
});

export default function AddTaskScreen() {
  const [assignDropdownValue, setAssignDropdownValue] = useState(null);
  const [priorityDropdownValue, setPriorityDropdownValue] = useState("1");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const assignData = [
    { label: "Anil Sanchana", value: "2" },
    { label: "Rabeeha Ahmed", value: "3" },
    { label: "Office Receptionist", value: "4" },
  ];

  const priorityData = [
    { label: "Normal", value: "1" },
    { label: "Important", value: "2" },
    { label: "Urgent", value: "3" },
  ];


  function formSubmitAction(formValues) {
    setIsLoading(true);
    axios
      .post(BASE_URL, {
        task_title: formValues.taskTitle,
        task_description: formValues.taskDescription,
        task_assign_to: formValues.taskAssignTo,
        task_due_date: formValues.taskDueDate,
        task_priority: formValues.taskPriority,
        action_type: "addtask",
      })
      .then(function (response) {
        if (response.data.status == 200) {
          console.log(response.data);
        } else {
          console.log(response.data);
        }
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
      });
  }

  return (
    <SafeAreaView style={CustomStyles.safeAreaView}>
      <View style={CustomStyles.contentAreaContainer}>
        <Formik
          initialValues={{
            taskTitle: "",
            taskDescription: "",
            taskAssignTo: "",
            taskDueDate: "",
            taskPriority: "",
          }}
          validationSchema={taskSchema}
          onSubmit={(values) => formSubmitAction(values)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            setFieldValue,
            setFieldTouched,
            isValid,
            handleSubmit,
          }) => (
            <View style={styles.formWrapper}>
              <Spinner size="large" color={Colors.GRAY} visible={isLoading} />
              <Text style={{ color: Colors.GRAY }}>
                Please enter the required fields.
              </Text>
              <TextInput
                placeholder="Task Title"
                placeholderTextColor={Colors.LIGHTGRAY}
                style={styles.textInput}
                value={values.taskTitle}
                onChangeText={handleChange("taskTitle")}
                onBlur={() => setFieldTouched("taskTitle")}
              />
              {touched.taskTitle && errors.taskTitle && (
                <Text style={styles.errorText}>{errors.taskTitle}</Text>
              )}
              <TextInput
                placeholder="Task Description"
                placeholderTextColor={Colors.LIGHTGRAY}
                style={[styles.textInput, styles.textArea]}
                multiline={true}
                value={values.taskDescription}
                onChangeText={handleChange("taskDescription")}
                onBlur={() => setFieldTouched("taskDescription")}
              />
              {touched.taskDescription && errors.taskDescription && (
                <Text style={styles.errorText}>{errors.taskDescription}</Text>
              )}
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.dropdownPlaceholderStyle}
                selectedTextStyle={styles.dropdownSelectedTextStyle}
                inputSearchStyle={styles.dropdownInputSearchStyle}
                containerStyle={styles.dropdownContainerStyle}
                data={assignData}
                search={false}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Task Assign to..."
                searchPlaceholder="Search..."
                value={assignDropdownValue}
                onChange={(item) => {
                  setAssignDropdownValue(item.value);
                  setFieldValue("taskAssignTo", item.value);
                }}
                onBlur={() => setFieldTouched("taskAssignTo")}
              />
              {!assignDropdownValue &&
                touched.taskAssignTo &&
                errors.taskAssignTo && (
                  <Text style={styles.errorText}>{errors.taskAssignTo}</Text>
                )}
              <TextInput
                placeholder="Task Due Date"
                placeholderTextColor={Colors.LIGHTGRAY}
                style={styles.textInput}
                value={values.taskDueDate}
                onChangeText={handleChange("taskDueDate")}
                onBlur={() => setFieldTouched("taskDueDate")}
                onTouchStart={() => setDatePickerVisibility(true)}
                editable={false}
              />
              {touched.taskDueDate && errors.taskDueDate && (
                <Text style={styles.errorText}>{errors.taskDueDate}</Text>
              )}
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={(date) => {
                  setFieldValue("taskDueDate", Moment(date).format('DD-MMM-YYYY'));
                  setDatePickerVisibility(false);
                }}
                onCancel={() => setDatePickerVisibility(false)}
                minimumDate={new Date()}
              />
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.dropdownPlaceholderStyle}
                selectedTextStyle={styles.dropdownSelectedTextStyle}
                inputSearchStyle={styles.dropdownInputSearchStyle}
                containerStyle={styles.dropdownContainerStyle}
                data={priorityData}
                search={false}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Task Priority..."
                searchPlaceholder="Search..."
                value={priorityDropdownValue}
                onChange={(item) => {
                  setPriorityDropdownValue(item.value);
                  setFieldValue("taskPriority", item.value);
                }}
              />
              <BtnPrimary
                btnTitle="Submit"
                btnPress={() => {
                  handleSubmit();
                }}
              />
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    padding: 10,
  },
  textInput: {
    color: Colors.GRAY,
    borderWidth: 1,
    borderColor: Colors.LIGHTGRAY,
    borderRadius: 6,
    backgroundColor: Colors.OFFWHITE,
    padding: 10,
    paddingHorizontal: 14,
    marginVertical: 8,
    fontSize: 16,
  },
  textArea: {
    height: 120,
    paddingTop: 10,
    textAlignVertical: "top",
  },
  dropdown: {
    marginVertical: 8,
    height: 40,
    backgroundColor: Colors.OFFWHITE,
    borderRadius: 6,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.LIGHTGRAY,
  },
  dropdownPlaceholderStyle: {
    color: Colors.LIGHTGRAY,
  },
  dropdownSelectedTextStyle: {
    color: Colors.GRAY,
  },
  dropdownInputSearchStyle: {
    color: Colors.GRAY,
  },
  dropdownContainerStyle: {
    backgroundColor: Colors.OFFWHITE,
  },
  errorText: {
    color: Colors.RED,
    paddingHorizontal: 2,
  },
});
