import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, Image, View, Modal } from "../design-system";
import { RootStackParamList } from "../types/RootStackParamList ";
import { useScreenSize } from "../hooks/useScreenSize";
import { SignUpButton } from "../components/SignUpButton";
import { useCallback } from "react";

export const HomePage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) => {
  const { height } = useScreenSize();

  const onSignUpClick = useCallback(
    () => navigation.navigate("Roles"),
    [navigation]
  );

  return (
<<<<<<< HEAD
    <View alignItems="center">
      <Modal>
        <View>
          <Text>Test</Text>
        </View>
      </Modal>
=======
       <View alignItems="center">
>>>>>>> 15de9602e3497b68eb23a7bc34c25bf76e413cf2
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
        text="התחבר/י לחשבון"
        onPress={() => navigation.navigate("SignUp", { isCareGiver: true })}
        buttonStyle={{ marginTop: height * 0.1, backgroundColor: "#FFFEF9" }}
      />
      <SignUpButton onClick={onSignUpClick} />
    </View>
   
  );
};
