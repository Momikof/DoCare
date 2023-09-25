import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { coolDownAsync, warmUpAsync } from "expo-web-browser";
import { useFonts } from "expo-font";
import { RootStackParamList } from "@types";
import { customFonts } from "@utils";
import { StatusBar } from "react-native";
import {
  EmailSignUpPage,
  HomePage,
  RolePage,
  SignInPage,
  SignUpPage,
  
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
  
  const {Screen, Group, Navigator} = createNativeStackNavigator<RootStackParamList>();

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
          <Screen name="Home" component={TasksPage} />
          <Screen name="Roles" component={RolePage} />
          <Screen name="SignUp" component={SignUpPage} />
          <Screen name="SignIn" component={SignInPage} />
          <Screen name="EmailSignUp" component={EmailSignUpPage} />
        </Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
