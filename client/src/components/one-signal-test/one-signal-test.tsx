import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "../../design-system";
import { LogLevel, OneSignal } from "react-native-onesignal";
import Constants from "expo-constants";
import { supabase } from "../../supabase";
import { useServicesStore } from "../../stores/services.store";
import { TextInput } from "react-native";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// const oneSignalAppId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID!

export const OneSignalTest: NextPage = () => {
  const {authService} = useServicesStore();
  const [phoneNumber, setPhoneNumber] = useState('+972');
  const [verifyCode, setVerifyCode] = useState('');
  const [title, setTitle] = useState('');
  
  useEffect(() => {
    console.log(Constants.expoConfig.extra.oneSignalAppId);
    // OneSignal.Debug.setLogLevel(LogLevel.Debug);
    // OneSignal.initialize(Constants.expoConfig.extra.oneSignalAppId);
    OneSignal.Notifications.requestPermission(true);
  }, []);

  const createSampleTask = async () => {
    if (!await authService.isLoggedIn()) {
      console.log('Please login with phone authentication');
      return;
    }

    supabase.from('tasks').insert({
      title: title,
      accepted_by: await authService.getUserId(),
      start_date: new Date().toString(),
      description: 'This works!',
      is_urgent: false,
    })
  };

  return (
    <View>
      {/* <Text>Step 1 login</Text>
      <TextInput onChangeText={(data) => setPhoneNumber(data)} placeholder="Phone number" />
      <Button text="Send code" onPress={() => authService.sms.signIn(phoneNumber)}/>
      <Text>Step 2  verify code</Text>
      <TextInput placeholder="Verify code" onChangeText={(data) => setVerifyCode(data)} />
      <Text>Step 3 Create new task</Text>
      <Button text="Verify" onPress={() => authService.sms.verify(phoneNumber, verifyCode)}/>
      <TextInput placeholder="Task title" onChangeText={(data) => setTitle(data)}/>
      <Button text="Create sample task" onPress={createSampleTask} /> */}
    </View>
  );
};

export default OneSignalTest;
