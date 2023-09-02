import { StatusBar } from 'expo-status-bar';
import { coolDownAsync, warmUpAsync } from 'expo-web-browser';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SupabaseOAuthProvider } from './src/auth/oauth/supabase.oauth-provider';

export default function App() {
  useEffect(() => {
    warmUpAsync();
    new SupabaseOAuthProvider('google').signIn();
    return () => {
      coolDownAsync();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
