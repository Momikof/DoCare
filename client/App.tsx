import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./src/pages/HomePage";
import { useFonts } from "expo-font";
import { SignUpPage } from "./src/pages/AuthenticationPages/SignUpPage";
import { RootStackParamList } from "./src/types/RootStackParamList ";
import { customFonts } from "./src/utils/customFonts";
import { StatusBar } from "react-native";
import { RolePage } from "./src/pages/AuthenticationPages/RolePage";
import { SignInPage } from "./src/pages/AuthenticationPages/SignInPage";
import { EmailSignUpPage } from "./src/pages/AuthenticationPages/EmailSignUpPage";
import { PhoneSignUpPage } from "./src/pages/AuthenticationPages/PhoneSignUpPage";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const [isFontsLoaded] = useFonts(customFonts);

  if (!isFontsLoaded) {
    return <></>;
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
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen name="SignIn" component={SignInPage} />
          <Stack.Screen name="EmailSignUp" component={EmailSignUpPage} />
          <Stack.Screen name="PhoneSignUp" component={PhoneSignUpPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
