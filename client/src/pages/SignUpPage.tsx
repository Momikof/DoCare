import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, Image, View } from "../design-system";
import { RootStackParamList } from "../types/RootStackParamList ";
import { useScreenSize } from "../hooks/useScreenSize";

export type SignUpPageProps = {
  isCareGiver: boolean;
};

export const SignUpPage = ({
  route,
}: NativeStackScreenProps<RootStackParamList, "SignUp">) => {
  const { isCareGiver } = route.params;
  const { height } = useScreenSize();

  return (
    <View alignItems="center">
      <Image
        marginTop={height * 0.25}
        source={require("../../assets/images/logo.png")}
      />
      <Text>SignUp as {isCareGiver ? "CareGiver" : "Supporter"}</Text>
    </View>
  );
};
