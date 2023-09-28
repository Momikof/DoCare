import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text } from "@design-system";
import { RootStackParamList } from "@types";
import { useScreenSize } from "@hooks";
import { SignUpButton } from "@components";
import { useCallback } from "react";
import { View } from "react-native";
import LogoSVG from "@images/logo.svg";
import { CountryPicker } from "react-native-country-codes-picker";

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
      {/* <LogoSVG style={{ marginTop: height * 0.25 }} />
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
      <SignUpButton onClick={onSignUpClick} /> */}
    </View>
  );
};
