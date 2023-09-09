import { View } from "react-native";
import { useScreenSize } from "../hooks/useScreenSize";
import { ReactNativeModal } from "react-native-modal";

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
      ></View>
    </ReactNativeModal>
  );
}
