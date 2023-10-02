import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@types";
import { Pressable, View, useWindowDimensions } from "react-native";
import { Text } from "../../design-system/Text";
import PersonSVG from "@images/waiting-person.svg";
import LogoSVG from "@images/logo.svg";
import StarsSVG from "@images/yellow-stars.svg";
import { Button } from "../../design-system/Button";

export const WaitingAcceptPage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "WaitingAccept">) => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={{ alignItems: "center" }}>
      <LogoSVG
        style={{
          maxHeight: height * 0.07,
          maxWidth: width * 0.3,
          marginTop: height * 0.03,
        }}
      />
      <PersonSVG
        style={{
          position: "relative",
          marginLeft: width * 0.05,
          marginTop: height * 0.05,
        }}
      />
      <Text
        style={{
          fontSize: 30,
          position: "relative",
          marginTop: height * 0.08,
          marginLeft: width * 0.05,
        }}
      >
        אופסי
      </Text>
      <StarsSVG
        style={{
          position: "absolute",
          top: height * 0.72,
          left: width * 0.32,
        }}
      />
      <Text
        variant="secondary"
        style={{ fontSize: 17, marginTop: height * 0.03 }}
      >
        הקייר גיבר עוד לא אישר את הבקשה שלך
      </Text>
      <Text
        variant="secondary"
        style={{ fontSize: 17, marginTop: height * 0.01 }}
      >
        נסה שוב מאוחר יותר :)
      </Text>
      <Button
        text="עדכן אותי שיתקבל אישור :)"
        style={{
          marginTop: height * 0.035,
          backgroundColor: "#1F1F1F",
        }}
        textStyle={{ color: "#FFFEF9" }}
      ></Button>
    </View>
  );
};
