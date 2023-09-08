import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "../design-system";
import { RootStackParamList } from "../types/RootStackParamList ";
import { useScreenSize } from "../hooks/useScreenSize";
import { useCallback } from "react";
import { Image, View } from "react-native";

export const RolePage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Roles">) => {
  const { height, width } = useScreenSize();

  const onSignUpClick = useCallback(
    () => navigation.navigate("SignCaregiver"),
    [navigation]
  );
  return (
    <View>
      <Image
        style={{
          position: "absolute",
          marginTop: height * 0.06,
          marginLeft: width * 0.8,
        }}
        source={require("../../assets/images/do.png")}
      />
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
          text="הרשמה כתומך"
          onPress={onSignUpClick}
          style={{ marginTop: height * 0.015, backgroundColor: "#EFE7FF" }}
        />
      </View>
    </View>
  );
};
