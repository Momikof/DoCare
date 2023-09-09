import { View } from "react-native";
import { useScreenSize } from "../hooks/useScreenSize";
import { ReactNativeModal } from "react-native-modal";
import { hasIn } from "lodash";

type Caregiverprops = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

export default function SupporterModal({
  isVisible,
  setIsVisible,
}: Caregiverprops) {
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
      ></View>
    </ReactNativeModal>
  );
}
