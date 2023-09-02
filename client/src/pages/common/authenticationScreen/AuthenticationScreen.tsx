import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, Image } from "../../../design-system";
import { RootStackParamList } from "../../../types/RootStackParamList ";
import {useWindowDimensions} from 'react-native';
import { StyleSheet, View } from "react-native";


export const AuthenticationScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "AuthenticationScreen">) => {
  
  const { height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../../assets/images/logo_brand_purple.svg")}
      />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  }
})



