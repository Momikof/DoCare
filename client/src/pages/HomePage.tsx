import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text } from "../design-system";
import { RootStackParamList } from "../types/RootStackParamList ";
import { useScreenSize } from "../hooks/useScreenSize";
import { SignUpButton } from "../components/buttons/SignUpButton";
import { useCallback } from "react";
import { Image, View } from "react-native";

export const HomePage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) => {
  const { height } = useScreenSize();

  const onSignUpClick = useCallback(
    () => navigation.navigate("Roles"),
    [navigation]
  );

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{ marginTop: height * 0.25 }}
        source={require("../../assets/images/logo.png")}
      />
      <Text style={{ marginTop: height * 0.075 }}>היי, ברוכים הבאים (:</Text>
      <View style={{ marginTop: height * 0.015, alignItems: "center" }}>
        <Text variant="secondary">הגעתם לDOCARE</Text>
        <Text variant="secondary">כאן תמיד לעזרה בלחיצה</Text>
      </View>
      <Button
        text="התחבר/י לחשבון"
        onPress={() => navigation.navigate("SignIn")}
        style={{ marginTop: height * 0.1, backgroundColor: "#FFFEF9" }}
      />
      <SignUpButton onClick={onSignUpClick} />
    </View>
  );
};
