import { StatusBar } from 'expo-status-bar';
import { coolDownAsync, warmUpAsync } from 'expo-web-browser';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SupabaseOAuthProvider } from './src/auth/oauth/supabase.oauth-provider';
import { ServiceContext } from './src/context/services.context';
import { SupabaseAuthService } from './src/services/auth/supabase-auth.service';

export default function App() {
  useEffect(() => {
    warmUpAsync();
    return () => {
      coolDownAsync();
    };
  }, []);

  return (
    <ServiceContext.Provider value={{authService: new SupabaseAuthService()}}>
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
    </ServiceContext.Provider>
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
