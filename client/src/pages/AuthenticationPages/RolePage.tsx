import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "@design-system";
import { RootStackParamList } from "@types";
import { useScreenSize } from "@hooks";
import { View } from "react-native";
import { SmallLogo, SupporterModal, CaregiverModal } from "@components";
import React, { useState } from "react";
import CoupleSVG from "@images/couple.svg";

export const RolePage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Roles">) => {
  const { height, width } = useScreenSize();

  const [isSupporterVisible, setSupporterIsVisible] = useState(false);
  const [isCaregiverVisible, setCaregiverIsVisible] = useState(false);

  const onSignSupporter = () => {
    setSupporterIsVisible(true);
  };
  const onSignCaregiver = () => {
    setCaregiverIsVisible(true);
  };

  return (
    <View>
      <SmallLogo align={"left"} />
      <View style={{ alignItems: "center" }}>
        <CoupleSVG style={{ marginTop: height * 0.23 }} />
        <Button
          text="כניסה כ- CAREGIVER"
          onPress={onSignCaregiver}
          style={{ marginTop: height * 0.18, backgroundColor: "#A99CFE" }}
        />
        <Button
          text="הרשמה כתומך"
          onPress={onSignSupporter}
          style={{ marginTop: height * 0.015, backgroundColor: "#EFE7FF" }}
        />
        <SupporterModal
          isVisible={isSupporterVisible}
          setIsVisible={setSupporterIsVisible}
        />
        <CaregiverModal
          isVisible={isCaregiverVisible}
          setIsVisible={setCaregiverIsVisible}
        />
      </View>
    </View>
  );
};
