import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { coolDownAsync, warmUpAsync } from "expo-web-browser";
import { RootStackParamList } from "@types";
import { customFonts } from "@utils";
import { StatusBar } from "react-native";
import {
  EmailSignUpPage,
  HomePage,
  RolePage,
  SignInPage,
  SignUpPage,
  NewCommunityPage,
  NewCaregiverPage,
  WaitingAcceptPage,
  PhonePage,
  SMSPage,
} from "@pages";
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
          <Stack.Screen name="NewCommunity" component={NewCommunityPage} />
          <Stack.Screen name="NewCaregiver" component={NewCaregiverPage} />
          <Stack.Screen name="WaitingAccept" component={WaitingAcceptPage} />
          <Stack.Screen name="Phone" component={PhonePage} />
          <Stack.Screen name="SMS" component={SMSPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
