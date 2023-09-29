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

import { config, GluestackUIProvider } from "@gluestack-ui/themed"
import { TasksPage } from "./src/pages/caregiver/tasks/tasksPage";


export default function App() {
  useEffect(() => {
    warmUpAsync();
    return () => {
      coolDownAsync();
    };
  }, []);
  
  const {Screen, Navigator} = createNativeStackNavigator<RootStackParamList>();

  const [isFontsLoaded] = useFonts(customFonts);

  if (!isFontsLoaded) {
    return <></>;
  }

  // To learn more about navigation: https://reactnavigation.org/
  return (
    <GluestackUIProvider config={config.theme}>
      <StatusBar />
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="Home" component={HomePage} />
          <Screen name="Roles" component={RolePage} />
          <Screen name="SignUp" component={SignUpPage} />
          <Screen name="SignIn" component={SignInPage} />
          <Screen name="EmailSignUp" component={EmailSignUpPage} />
          <Screen name="NewCommunity" component={NewCommunityPage} />
          <Screen name="NewCaregiver" component={NewCaregiverPage} />
          <Screen name="WaitingAccept" component={WaitingAcceptPage} />
          <Screen name="Phone" component={PhonePage} />
        </Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
