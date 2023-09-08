import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "../../design-system";
import { RootStackParamList } from "../../types/RootStackParamList ";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useCallback } from "react";
import { Image, View } from "react-native";
import { SmallLogo } from "../../components/SmallLogo";
import SignUpModal from "../../components/SignUpModal";
import React, { useState } from "react";

export const RolePage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Roles">) => {
  const { height, width } = useScreenSize();
  const [isVisible, setIsVisible] = useState(false);
  const onSignSupporter = () => {
    setIsVisible(true);
  };
  return (
    <View>
      <SmallLogo align={"right"} />
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ marginTop: height * 0.23 }}
          source={require("../../../assets/images/Group.png")}
        />
        <Button
          text="כניסה כ- CAREGIVER"
          onPress={() => {}}
          style={{ marginTop: height * 0.18, backgroundColor: "#A99CFE" }}
        />
        <Button
          text="הרשמה כתומך"
          onPress={onSignSupporter}
          style={{ marginTop: height * 0.015, backgroundColor: "#EFE7FF" }}
        />
        <SignUpModal isVisible={isVisible} setIsVisible={setIsVisible} />
      </View>
    </View>
  );
};