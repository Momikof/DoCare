import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "../design-system";
import { RootStackParamList } from "../types/RootStackParamList ";
import { useScreenSize } from "../hooks/useScreenSize";
import { Image, View } from "react-native";

export type SignUpPageProps = {
  isCareGiver: boolean;
};

export const SignUpPage = ({
  route,
}: NativeStackScreenProps<RootStackParamList, "SignUp">) => {
  const { isCareGiver } = route.params;
  const { height } = useScreenSize();

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{ marginTop: height * 0.25 }}
        source={require("../../assets/images/logo.png")}
      />
      <Text>SignUp as {isCareGiver ? "CareGiver" : "Supporter"}</Text>
    </View>
  );
};
