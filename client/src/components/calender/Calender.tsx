// import { Text } from "../../design-system/Text";
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View,Image } from 'react-native';
import {Text} from '@design-system'
import CalendarPicker from 'react-native-calendar-picker';
import ArrowSVG from '@images/arrow-left.svg';
import { SvgUri } from 'react-native-svg';
import { transform } from 'lodash';

const CALENDER_TITLE = 'לו ח שנה';
const DATE_FORNAT = 'DD-MM-YYYY';
const SELECTED_DAY_COLOR = '#A99CFE';
const WEEK_DAYS = ['ראשון', 'שני','שלישי','רביעי','חמישי','שישי','שבת'];
const MONTHS = ['ינואר','פבואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'];
const NEXT = 'הבא';
const PREVIOUS = 'קודם';

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
        <CalendarPicker onDateChange={setSelectedDate}
                        selectedDayColor={SELECTED_DAY_COLOR}
                        weekdays={WEEK_DAYS}
                        months={MONTHS}
                        previousComponent={<ArrowSVG/>}
                        nextComponent={<ArrowSVG style={[{transform:[{rotate:'180deg'}]}]}/>}
                        />
        <Text >Selected date: {formatSelectedDate}</Text>
        {/* {showTasksOnSelectedDay(selectedDate)} */}
      </View>
    );  
}