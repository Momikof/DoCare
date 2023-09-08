import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "../../design-system";
import { RootStackParamList } from "../../types/RootStackParamList ";
import { useScreenSize } from "../../hooks/useScreenSize";
import { Image, View } from "react-native";
import { WhiteCircle } from "../../components/WhiteCircle";
import { IconButton } from "../../design-system";

export type SignUpPageProps = {
  isCareGiver: boolean;
};

export const SignUpPage = ({
  route,
}: NativeStackScreenProps<RootStackParamList, "SignUp">) => {
  const { isCareGiver } = route.params;
  const { height, width } = useScreenSize();

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
          {/* might want to change this image to just be the text flipped, or get a better resultion image @_@ */}
          <Image source={require("../../../assets/images/do-black.png")} />
        </WhiteCircle>
        <Text style={{ marginTop: height * 0.065 }}>
          איזה כיף! נרשמים חדשים
        </Text>
        <Text variant="secondary" style={{ marginTop: height * 0.01 }}>
          מרגש! זה הרגע להירשם ל - DoCare
        </Text>
        <IconButton
          text={"כניסה דרך google"}
          icon={require("../../../assets/images/google.png")}
          style={{ marginTop: height * 0.085 }}
        />
        <IconButton
          text={"כניסה באמצעות קוד לנייד"}
          icon={require("../../../assets/images/phone.png")}
          style={{ marginTop: height * 0.01 }}
        />
        <IconButton
          text={"הרשמה דרך מייל"}
          icon={require("../../../assets/images/mail.png")}
          style={{ marginTop: height * 0.01 }}
        />
      </View>

      <View style={{ flexDirection: "row", marginTop: height * 0.075 }}>
        <Text variant="secondary" style={{ fontSize: 14 }}>
          כבר יש לך חשבון?{" "}
        </Text>
        <Text variant="link" onPress={() => {}}>
          היכנס/י לאפליקציה
        </Text>
      </View>
    </View>
  );
};
