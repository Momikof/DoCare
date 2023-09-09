import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "../../design-system";
import { RootStackParamList } from "../../types/RootStackParamList ";
import { useScreenSize } from "../../hooks/useScreenSize";
import { View } from "react-native";
import { WhiteCircle } from "../../components/WhiteCircle";
import { IconButton } from "../../design-system";
import { useCallback } from "react";
import GoogleSVG from "../../../assets/images/google.svg";
import MailSVG from "../../../assets/images/mail.svg";
import PhoneSVG from "../../../assets/images/phone.svg";
import DoBlackSVG from "../../../assets/images/do-black.svg";

export const SignUpPage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "SignUp">) => {
  const { height, width } = useScreenSize();

  const onAlreadySignedClick = useCallback(
    () => navigation.navigate("SignIn"),
    [navigation]
  );

  const onPhoneSignUpClick = useCallback(
    () => navigation.navigate("PhoneSignUp"),
    [navigation]
  );

  const onEmailSignUpClick = useCallback(
    () => navigation.navigate("EmailSignUp"),
    [navigation]
  );

  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#EFE7FF",
          borderRadius: 32,
          marginTop: height * 0.035,
          width: "93.75%",
          height: "82.5%",
          alignItems: "center",
        }}
      >
        <WhiteCircle size={width * 0.475} style={{ marginTop: height * 0.085 }}>
          <DoBlackSVG />
        </WhiteCircle>
        <Text style={{ marginTop: height * 0.065 }}>
          איזה כיף! נרשמים חדשים
        </Text>
        <Text variant="secondary" style={{ marginTop: height * 0.01 }}>
          מרגש! זה הרגע להירשם ל - DoCare
        </Text>
        <IconButton
          text={"כניסה דרך google"}
          icon={<GoogleSVG />}
          style={{ marginTop: height * 0.085 }}
        />
        <IconButton
          text={"כניסה באמצעות קוד לנייד"}
          icon={<PhoneSVG />}
          style={{ marginTop: height * 0.01 }}
          onPress={onPhoneSignUpClick}
        />
        <IconButton
          text={"הרשמה דרך מייל"}
          icon={<MailSVG />}
          style={{ marginTop: height * 0.01 }}
          onPress={onEmailSignUpClick}
        />
      </View>

      <View style={{ flexDirection: "row", marginTop: height * 0.075 }}>
        <Text variant="secondary" style={{ fontSize: 14 }}>
          כבר יש לך חשבון?{" "}
        </Text>
        <Text variant="link" onPress={onAlreadySignedClick}>
          היכנס/י לאפליקציה
        </Text>
      </View>
    </View>
  );
};
