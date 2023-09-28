import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "@design-system";
import { RootStackParamList } from "@types";
import { useScreenSize } from "@hooks";
import { View } from "react-native";
import { SmallLogo, SupporterModal, CaregiverModal } from "@components";
import React, { useState } from "react";
import CoupleSVG from "@images/rain-couple.svg";

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

  const onPressGroup = () => {
    navigation.navigate("NewCommunity");
  };

  return (
    <View>
      <SmallLogo align={"left"} />
      <View style={{ alignItems: "center" }}>
        <CoupleSVG
          style={{
            marginTop: height * 0.14,
            maxWidth: width * 0.6,
            maxHeight: height * 0.55,
          }}
        />
        <Button
          text="כניסה כ- CAREGIVER"
          onPress={onSignCaregiver}
          style={{ marginTop: height * 0.12, backgroundColor: "#A99CFE" }}
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
          onPressGroup={onPressGroup}
          onSignSupporter={onSignSupporter}
          isVisible={isCaregiverVisible}
          setIsVisible={setCaregiverIsVisible}
        />
      </View>
    </View>
  );
};
