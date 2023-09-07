import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, Image, View, Modal } from "../design-system";
import { RootStackParamList } from "../types/RootStackParamList ";
import { useScreenSize } from "../hooks/useScreenSize";
import { SignUpButton } from "../components/SignUpButton";
import { useCallback } from "react";
import SignUpModal from "../components/SignUpModal";

export const HomePage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) => {
  const { height } = useScreenSize();

  const onSignUpClick = useCallback(
    () => navigation.navigate("Roles"),
    [navigation]
  );

  return (
    <View alignItems="center">
      <Image
        marginTop={height * 0.25}
        source={require("../../assets/images/logo.png")}
      />
      <SignUpModal />
      <Text marginTop={height * 0.075}>היי, ברוכים הבאים (:</Text>
      <View marginTop={height * 0.015} alignItems="center">
        <Text varinat="secondary">הגעתם לDOCARE</Text>
        <Text varinat="secondary">כאן תמיד לעזרה בלחיצה</Text>
      </View>
      <Button
        text="התחבר/י לחשבון"
        onPress={() => navigation.navigate("SignUp", { isCareGiver: true })}
        buttonStyle={{ marginTop: height * 0.1, backgroundColor: "#FFFEF9" }}
      />
      <SignUpButton onClick={onSignUpClick} />
    </View>
  );
};
