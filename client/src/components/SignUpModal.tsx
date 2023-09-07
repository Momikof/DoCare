import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button, View, TextInput, Modal } from "../design-system";
import { Formik, Form, Field } from "formik";
import { useScreenSize } from "../hooks/useScreenSize";

import * as Yup from "yup";
import "yup-phone";

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
    <View alignItems="center">
      <Modal>
        <View backgroundColor={"#EFE7FF"}>
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
                {/* only if the left value is a valid string, will the right value be displayed */}
                <Text>{props.touched.name && props.errors.name}</Text>

                <TextInput
                  placeholder="Review details"
                  onChangeText={props.handleChange("number")}
                  value={props.values.number}
                />
                <Text>{props.touched.number && props.errors.number}</Text>

                <Button
                  text="המשך :)"
                  onPress={props.handleSubmit}
                  buttonStyle={{
                    marginTop: height * 0.015,
                    backgroundColor: "#EFE7FF",
                  }}
                />
              </View>
            )}
          </Formik>
        </View>
      </Modal>
    </View>
  );
}
