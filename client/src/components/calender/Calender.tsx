// import { Text } from "../../design-system/Text";
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View} from 'react-native';
import {Text} from '@design-system'
import CalendarPicker from 'react-native-calendar-picker';

const CALENDER_TITLE = 'לו ח שנה';
const DATE_FORNAT = 'DD-MM-YYYY';

export const Calender = () => {
    const [selectedDate, setSelectedDate] = useState<any>();
    const formatSelectedDate = selectedDate
      ? selectedDate.format(DATE_FORNAT).toString()
      : '';

    return (
        <View >
          <Text></Text>
          <Text>{CALENDER_TITLE}</Text>
          <Text></Text>
        <StatusBar style="auto" />
        <CalendarPicker onDateChange={setSelectedDate} />
        <Text >Selected date: {formatSelectedDate}</Text>
        {/* {showTasksOnSelectedDay(selectedDate)} */}
      </View>
    );  
}