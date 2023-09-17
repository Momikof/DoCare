import { View, useWindowDimensions } from "react-native";
import { Button, TextInput } from "@design-system";
import { Formik } from "formik";

import * as Yup from "yup";
import "yup-phone";
import { ReactNativeModal } from "react-native-modal";

const reviewSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string().matches(new RegExp("[0-9]{7}")).required("Required"),
});

type SupporterModalProps = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

export function SupporterModal({
  isVisible,
  setIsVisible,
}: SupporterModalProps) {
  const { height, width } = useWindowDimensions();

  return (
    <ReactNativeModal
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      isVisible={isVisible}
      onBackdropPress={() => {
        setIsVisible(false);
      }}
    >
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          // actions.resetForm();
          console.log(values);
        }}
      >
        {(props) => (
          <View
            style={{
              backgroundColor: "#EFE7FF",
              alignItems: "center",
              width: width * 0.95,
              height: height * 0.35,
              borderRadius: 32,
              borderWidth: 1,
              borderColor: "#1F1F1F",
            }}
          >
            <TextInput
              style={{ marginTop: height * 0.05 }}
              placeholder="איך קוראים לך?"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            />
            <TextInput
              keyboardType="numeric"
              style={{ marginTop: height * 0.015 }}
              placeholder="מס' הטלפון של הCAREGIVER"
              onChangeText={props.handleChange("number")}
              value={props.values.number}
            />

            <Button
              text="המשך :)"
              onPress={() => {
                props.submitForm();
              }}
              style={{
                marginTop: height * 0.015,
                backgroundColor: "#1F1F1F",
              }}
              textStyle={{ color: "#FFFEF9" }}
            />
          </View>
        )}
      </Formik>
    </ReactNativeModal>
  );
}
