import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { RootStackParamList } from "@types";
import { customFonts } from "@utils";
import { StatusBar } from "react-native";
import {
  EmailSignUpPage,
  HomePage,
  PhoneSignUpPage,
  RolePage,
  SignInPage,
  SignUpPage,
} from "@pages";
import { useScreenSize } from "@hooks";

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
