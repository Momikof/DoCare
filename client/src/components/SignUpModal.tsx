import React from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "../design-system";
import { Formik } from "for mik";
import { useScreenSize } from "../hooks/useScreenSize";

import * as Yup from "yup";
import "yup-phone";
import ReactNativeModal from "react-native-modal";

const reviewSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string().matches(new RegExp("[0-9]{7}")).required("Required"),
});

export default function ReviewForm() {
  const { height, width } = useScreenSize();
  return (
    <View style={{ alignItems: "center" }}>
      {/* <ReactNativeModal>
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
                  placeholder="Review title"
                  onChangeText={props.handleChange("name")}
                  value={props.values.name}
                />
                <Text>{props.touched.name && props.errors.name}</Text>

                <TextInput
                  placeholder="Review details"
                  onChangeText={props.handleChange("number")}
                  value={props.values.number}
                />
                <Text>{props.touched.number && props.errors.number}</Text>

                <Button
                  text="המשך :)"
                  onPress={() => {}}
                  style={{
                    marginTop: height * 0.015,
                    backgroundColor: "#EFE7FF",
                  }}
                />
              </View>
            )}
          </Formik>
        </View>
      </ReactNativeModal> */}
    </View>
  );
}
