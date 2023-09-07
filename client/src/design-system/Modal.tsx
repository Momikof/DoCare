import { ReactNativeModal } from "react-native-modal";
import { useState } from "react";

type ModalProps = {} & React.PropsWithChildren;

// https://github.com/react-native-modal/react-native-modal

export const Modal = ({ children }: ModalProps) => {
  const [isModalVisible, setModalVisible] = useState(true);

  return (
    <ReactNativeModal
      onBackdropPress={() => setModalVisible(false)}
      isVisible={isModalVisible}
    >
      {children}
    </ReactNativeModal>
  );
};
