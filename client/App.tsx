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
} from "@pages";

import MyTabs from "./src/components/TabNavigator";
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
        <MyTabs />
      </NavigationContainer>
    </>
  );
}
