import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "./src/design-system";
import { HomePage } from "./src/pages/HomePage";
import { useFonts } from "expo-font";
import { SignUpPage } from "./src/pages/SignUpPage";
import { RootStackParamList } from "./src/types/RootStackParamList ";
import { customFonts } from "./src/utils/customFonts";
import { StatusBar } from "react-native";
import { RolePage } from "./src/pages/RolePage";
import { SignUpCaregiver } from "./src/pages/SignUpCaregiver";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const [isFontsLoaded] = useFonts(customFonts);

  if (!isFontsLoaded) {
    return <Text>Loading...</Text>;
  }

  // To learn more about navigation: https://reactnavigation.org/
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Roles" component={RolePage} />
          <Stack.Screen name="SignCaregiver" component={SignUpCaregiver} />
          <Stack.Screen
            name="SignUp"
            component={SignUpPage}
            initialParams={{ isCareGiver: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
