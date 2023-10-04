import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from '@design-system'
import { Calendar } from 'react-native-calendars';

const CALENDER_TITLE = 'לו ח שנה';
const SELECTED_DAY_COLOR = '#A99CFE';
const DAYS_TITLE_COLOR = '#797876';
const ARROW_COLOR = '#1F1F1F';
const TODAY_COLOR = '#A99CFE';
const NUMBERS_FONT = 'Anomalia';
const NUMBERS_FONT_SIZE = 18;

export const DoCareCalender = () => {
  const [selected, setSelected] = useState('');

  return (
    <View >
      <Text></Text>
      <Text>{CALENDER_TITLE}</Text>
      <Text></Text>
      <StatusBar style="auto" />
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedColor: SELECTED_DAY_COLOR }
        }}
        theme={{
          textSectionTitleColor: DAYS_TITLE_COLOR,
          arrowColor: ARROW_COLOR,
          todayTextColor: TODAY_COLOR,
          textDayFontFamily: NUMBERS_FONT,
          textDayFontSize: NUMBERS_FONT_SIZE

        }}
      />
      {/* {showTasksOnSelectedDay(selectedDate)} */}
    </View>
  );
}