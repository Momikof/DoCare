import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Image, View } from "../design-system";
import { RootStackParamList } from "../types/RootStackParamList ";
import { useScreenSize } from "../hooks/useScreenSize";

export const RolePage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Roles">) => {
  const { height, width } = useScreenSize();
  return (
    <View>
      <Image
        position={"absolute"}
        marginTop={height * 0.06}
        marginLeft={width * 0.8}
        source={require("../../assets/images/do.png")}
      />
      <View alignItems="center">
        <Image
          marginTop={height * 0.23}
          source={require("../../assets/images/Group.png")}
        />
        <Button
          text="כניסה כ- CAREGIVER"
          onPress={() => {}}
          buttonStyle={{ marginTop: height * 0.18, backgroundColor: "#A99CFE" }}
        />
        <Button
          text="כניסה כתמוך"
          onPress={() => {}}
          buttonStyle={{
            marginTop: height * 0.015,
            backgroundColor: "#EFE7FF",
          }}
        />
      </View>
    </View>
  );
};
