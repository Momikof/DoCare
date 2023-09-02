import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "./src/design-system";
import { Homepage } from "./src/pages/common/homepage/Homepage";
import { useFonts } from "expo-font";
import { RootStackParamList } from "./src/types/RootStackParamList ";
import { customFonts } from "./src/utils/customFonts";
import { AuthenticationScreen } from "./src/pages/common/authenticationScreen/AuthenticationScreen";

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
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen
          name="AuthenticationScreen"
          component={AuthenticationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
