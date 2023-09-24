import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@types";
import { useScreenSize } from "@hooks";
import { Pressable, View } from "react-native";
import { Text } from "../../design-system/Text";
import ArrowSVG from "@images/arrow-left.svg";
import ProfilePicture from "../../components/ProfilePicture";
import ShareExample from "../../components/buttons/ShareButton";

export const NewCommunityPage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "NewCommunity">) => {
  const { height, width } = useScreenSize();

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
        <ProfilePicture />
        <View
          style={{
            width: width * 0.96,
            height: height * 0.6,
            backgroundColor: "#EFE7FF",
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "#1F1F1F",
            marginTop: height * 0.1,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              marginTop: height * 0.04,
              marginRight: width * 0.08,
            }}
          >
            משתתפים
          </Text>

          <ShareExample />
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
