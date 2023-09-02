import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, Image } from "../../../design-system";
import { RootStackParamList } from "../../../types/RootStackParamList ";
import {useWindowDimensions} from 'react-native';
import { StyleSheet, View } from "react-native";


export const Homepage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Homepage">) => {
  
  const { height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/images/logo.png")}
      />
      <Text marginTop={height * 0.075}>היי, ברוכים הבאים (:</Text>
      <View>
        <Text varinat="secondary">הגעתם לdocare</Text>
        <Text varinat="secondary">כאן תמיד לעזרה בלחיצה</Text>
      </View>
      <Button
        text="כניסה כ- CAREGIVER"
        onPress={() => navigation.navigate("AuthenticationScreen")}
        buttonStyle={{ marginTop: height * 0.1, backgroundColor: "#A99CFE" }}
      />
      <Button
        text="כניסה כתומך"
        onPress={() => navigation.navigate("AuthenticationScreen")}
        buttonStyle={{ marginTop: height * 0.015, backgroundColor: "#EFE7FF" }}
      />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  }
})



