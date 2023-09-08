import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "../design-system";
import { RootStackParamList } from "../types/RootStackParamList ";
import { useScreenSize } from "../hooks/useScreenSize";
import { Image, View } from "react-native";
import { SmallLogo } from "../components/SmallLogo";

export const RolePage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Roles">) => {
  const { height } = useScreenSize();
  return (
    <View>
      <SmallLogo align={"right"} />
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ marginTop: height * 0.23 }}
          source={require("../../assets/images/Group.png")}
        />
        <Button
          text="כניסה כ- CAREGIVER"
          onPress={() => {}}
          style={{ marginTop: height * 0.18, backgroundColor: "#A99CFE" }}
        />
        <Button
          text="כניסה כתמוך"
          textStyle={{ color: "#FFFEF9" }}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};
