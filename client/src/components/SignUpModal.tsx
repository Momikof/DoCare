import React, { useState } from "react";
import { View } from "react-native";
import { Button, TextInput, Text } from "../design-system";
import { Formik } from "formik";
import { useScreenSize } from "../hooks/useScreenSize";

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

type SignUpModalProps = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

export default function SignUpModal({
  isVisible,
  setIsVisible,
}: SignUpModalProps) {
  const { height, width } = useScreenSize();

  return (
    <View style={{ alignItems: "center" }}>
      <ReactNativeModal
        isVisible={isVisible}
        onBackdropPress={() => {
          setIsVisible(false);
        }}
      >
        <View style={{ backgroundColor: "#EFE7FF" }}>
          <Formik
            initialValues={{ name: "", number: "" }}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
              actions.resetForm();
              console.log(values);
            }}
          >
            {(props) => (
              <View>
                <TextInput
                  placeholder="איך קוראים לך"
                  onChangeText={props.handleChange("name")}
                  value={props.values.name}
                />
                {/* only if the left value is a valid string, will the right value be displayed */}
                <Text>{props.touched.name && props.errors.name}</Text>

                <TextInput
                  placeholder="מס' הטלפון של הCAREGIVER"
                  onChangeText={props.handleChange("number")}
                  value={props.values.number}
                />
                <Text>{props.touched.number && props.errors.number}</Text>

                <Button
                  text="המשך :)"
                  onPress={() => {
                    setIsVisible(false);
                  }}
                  style={{
                    marginTop: height * 0.015,
                    backgroundColor: "#EFE7FF",
                  }}
                />
              </View>
            )}
          </Formik>
        </View>
      </ReactNativeModal>
    </View>
  );
}
