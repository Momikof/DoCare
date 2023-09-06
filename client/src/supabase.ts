import 'react-native-url-polyfill/auto'
import * as SecureStore from 'expo-secure-store'
import { createClient,  } from '@supabase/supabase-js'
import { Database } from './types/database.types'

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key)
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value)
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key)
  },
}
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_PUBLIC_ANNO_KEY as string

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})