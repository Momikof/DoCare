import { Button, Text, Image, View } from "../design-system";

type HomeScreenProps = {
  navigation: any;
};

export const HomePage = ({ navigation }: HomeScreenProps) => {
  return (
    <View alignItems="center">
      <Image
        marginLeft={20}
        marginTop="35%"
        source={require("../../assets/images/logo.png")}
      />
      <Text marginTop={61}>היי, ברוכים הבאים (:</Text>
      <View marginTop={14} alignItems="center">
        <Text varinat="secondary">הגעתם לdocare</Text>
        <Text varinat="secondary">כאן תמיד לעזרה בלחיצה</Text>
      </View>
      <Button
        text="כניסה כ- CAREGIVER"
        onPress={() => navigation.navigate("SignUp")}
        buttonStyle={{ marginTop: 74, backgroundColor: "#A99CFE" }}
      />
      <Button
        text="כניסה כתומך"
        onPress={() => {}}
        buttonStyle={{ backgroundColor: "#EFE7FF" }}
      />
    </View>
  );
};
