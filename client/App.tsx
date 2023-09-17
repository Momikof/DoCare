import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "./src/design-system";
import { HomePage } from "./src/pages/HomePage";
import { useFonts } from "expo-font";
import { SignUpPage } from "./src/pages/SignUpPage";
import { RootStackParamList } from "./src/types/RootStackParamList ";
import { customFonts } from "./src/utils/customFonts";
import { useEffect } from "react";
import { coolDownAsync, warmUpAsync } from "expo-web-browser";
import Home from "./src/components/one-signal-test/one-signal-test";

export default function App() {
  useEffect(() => {
    warmUpAsync();
    return () => {
      coolDownAsync();
    };
  }, []);
  
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const [isFontsLoaded] = useFonts(customFonts);

  if (!isFontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    // To learn more about navigation: https://reactnavigation.org/
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="SignUp"
          component={SignUpPage}
          initialParams={{ isCareGiver: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
