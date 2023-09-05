import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Button,
  Text,
  Image,
  View,
  styles as buttonStyles,
} from "../design-system";
import { RootStackParamList } from "../types/RootStackParamList ";
import { useScreenSize } from "../hooks/useScreenSize";
import { Pressable } from "../design-system/Pressable";
import { SignUpButton } from "../components/SignUpButton";
import { useCallback } from "react";

export const HomePage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) => {
  const { height } = useScreenSize();

  const onSignUpClick = useCallback(
    () => navigation.navigate("SignUp", { isCareGiver: false }),
    [navigation]
  );

  return (
    <View alignItems="center">
      <Image
        marginTop={height * 0.25}
        source={require("../../assets/images/logo.png")}
      />
      <Text marginTop={height * 0.075}>היי, ברוכים הבאים (:</Text>
      <View marginTop={height * 0.015} alignItems="center">
        <Text varinat="secondary">הגעתם לDOCARE</Text>
        <Text varinat="secondary">כאן תמיד לעזרה בלחיצה</Text>
      </View>
      <Button
        text="כניסה כ- CAREGIVER"
        onPress={() => navigation.navigate("SignUp", { isCareGiver: true })}
        buttonStyle={{ marginTop: height * 0.1, backgroundColor: "#FFFEF9" }}
      />
      <SignUpButton onClick={onSignUpClick} />
    </View>
  );
};
