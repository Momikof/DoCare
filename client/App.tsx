import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "./src/design-system";
import { HomePage } from "./src/pages/HomePage";
import { useFonts } from "expo-font";
import { SignUpPage } from "./src/pages/SignUpPage";
import { RootStackParamList } from "./src/types/RootStackParamList ";

// Still waiting for UI to send the correct fonts
const customFonts = {
  Anomalia: require("./assets/fonts/Anomalia.ttf"),
  AnomaliaBold: require("./assets/fonts/AnomaliaBold.ttf"),
};

export default function App() {
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
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen
          name="SignUp"
          component={SignUpPage}
          initialParams={{ isCareGiver: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
