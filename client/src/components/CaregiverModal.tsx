import { View } from "react-native";
import { Text } from "@design-system";
import { useScreenSize } from "../hooks/useScreenSize";
import { ReactNativeModal } from "react-native-modal";
import CreateGroupSVG from "@images/create-group.svg";
import JoinGroupSVG from "@images/join-group.svg";
import BabyCoupleSVG from "@images/baby-couple.svg";

type CaregiverModalProps = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

export function CaregiverModal({
  isVisible,
  setIsVisible,
}: CaregiverModalProps) {
  const { height, width } = useScreenSize();

  return (
    <ReactNativeModal
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      isVisible={isVisible}
      onBackdropPress={() => {
        setIsVisible(false);
      }}
    >
      <View
        style={{
          backgroundColor: "#A99CFE",
          width: width * 0.95,
          height: height * 0.7,
          borderRadius: 32,
          borderWidth: 1,
          borderColor: "#1F1F1F",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <JoinGroupSVG
            style={{
              maxHeight: height * 0.15,
              maxWidth: width * 0.4,
              marginLeft: width * 0.05,
              marginTop: height * 0.05,
            }}
          />

          <View
            style={{
              position: "absolute",
              marginTop: height * 0.1,
              marginLeft: width * 0.08,
            }}
          >
            <Text variant="secondary">הצתרף לקבוצת</Text>
            <Text variant="secondary">טיפול קיימת</Text>
          </View>

          <CreateGroupSVG
            style={{
              maxHeight: height * 0.15,
              maxWidth: width * 0.4,
              marginLeft: width * 0.05,
              marginTop: height * 0.05,
            }}
          />
          <View
            style={{
              position: "absolute",
              marginTop: height * 0.1,
              marginLeft: width * 0.58,
            }}
          >
            <Text variant="secondary">פתח קבוצת</Text>
            <Text variant="secondary">טיפול חדשה</Text>
          </View>
        </View>
        <BabyCoupleSVG
          style={{
            maxHeight: height * 0.4,
            maxWidth: width * 0.9,
            marginLeft: width * 0.02,
            marginTop: height * 0.03,
          }}
        />
      </View>
    </ReactNativeModal>
  );
}
