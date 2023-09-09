import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "@design-system";
import { RootStackParamList } from "@types";
import { useScreenSize } from "@hooks";
import { View } from "react-native";
import { SmallLogo, SignUpModal } from "@components";
import { useState } from "react";
import CoupleSVG from "@images/couple.svg";

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
      <SmallLogo align={"left"} />
      <View style={{ alignItems: "center" }}>
        <CoupleSVG style={{ marginTop: height * 0.23 }} />
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
