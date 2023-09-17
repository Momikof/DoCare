import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { View } from '../../design-system'
import {LogLevel, OneSignal} from 'react-native-onesignal'
import Constants from 'expo-constants'

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// const oneSignalAppId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID!

export const Home: NextPage = () => {
  useEffect(() => {
    OneSignal.Debug.setLogLevel(LogLevel.Debug);
    OneSignal.initialize(Constants.expoConfig.extra.oneSignalAppId);
    OneSignal.Notifications.requestPermission(true);
  }, []);
  return <View>

  </View>
}

export default Home