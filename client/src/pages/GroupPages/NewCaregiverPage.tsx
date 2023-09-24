import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@types";
import { useScreenSize } from "@hooks";
import { Pressable, View } from "react-native";
import { Text } from "../../design-system/Text";
import ArrowSVG from "@images/arrow-left.svg";
import ProfilePicture from "../../components/ProfilePicture";
import ShareExample from "../../components/buttons/ShareButton";
import DudeSVG from "@images/do-small-black.svg";

export const NewCaregiverPage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "NewCaregiver">) => {
  const { height, width } = useScreenSize();
  const message =
    "הצטרפו ל-do care כדי לעזור מכל הלב במה שהאנשים הקרובים אליכם באמת צריכים";
  return (
    <View>
      <Pressable
        style={{
          position: "absolute",
          marginLeft: width * 0.9,
          marginTop: height * 0.045,
        }}
        onPress={() => navigation.navigate("Roles")}
      >
        <ArrowSVG />
      </Pressable>
      <View style={{ alignItems: "center" }}>
        <ProfilePicture variant="dark" />
        <View
          style={{
            width: width * 0.96,
            height: height * 0.6,
            backgroundColor: "#A99CFE",
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "#1F1F1F",
            marginTop: height * 0.1,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 30,
                marginTop: height * 0.03,
              }}
            >
              קייר גיבר'ז
            </Text>
          </View>

          <ShareExample
            style={{
              marginTop: height * 0.35,
              marginLeft: width * 0.78,
            }}
            message={message}
            svgImage={<DudeSVG />}
          />
          <Text
            variant="secondary"
            style={{
              fontSize: 16,
              position: "absolute",
              marginTop: height * 0.45,
              marginLeft: width * 0.07,
            }}
          >
            שלח בקשה להוספת קיירגיבר חדש
          </Text>
        </View>
      </View>
    </View>
  );
};
