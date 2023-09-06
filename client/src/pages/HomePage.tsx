import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, Image, View } from "../design-system";
import { RootStackParamList } from "../types/RootStackParamList ";
import { useScreenSize } from "../hooks/useScreenSize";

export const HomePage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) => {
  const { height } = useScreenSize();

  return (
    <View alignItems="center">
      <Image
        marginTop={height * 0.25}
        source={require("../../assets/images/logo.png")}
      />
      <Text marginTop={height * 0.075}>היי, ברוכים הבאים (:</Text>
      <View marginTop={height * 0.015} alignItems="center">
        <Text varinat="secondary">הגעתם לdocare</Text>
        <Text varinat="secondary">כאן תמיד לעזרה בלחיצה</Text>
      </View>
      <Button
        text="כניסה כ- CAREGIVER"
        onPress={() => navigation.navigate("SignUp", { isCareGiver: true })}
        buttonStyle={{ marginTop: height * 0.1, backgroundColor: "#A99CFE" }}
      />
      <Button
        text="כניסה כתומך"
        onPress={() => navigation.navigate("SignUp", { isCareGiver: false })}
        buttonStyle={{ marginTop: height * 0.015, backgroundColor: "#EFE7FF" }}
      />
    </View>
  );
};
