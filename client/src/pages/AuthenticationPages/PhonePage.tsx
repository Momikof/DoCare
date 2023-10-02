import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text } from "@design-system";
import { RootStackParamList } from "@types";
import { useScreenSize } from "@hooks";
import { Pressable, View, TextInput } from "react-native";
import React, { useState } from "react";
import { CountryItem, CountryPicker } from "react-native-country-codes-picker";
import ArrowSVG from "@images/arrow-right.svg";
import ArrowDSVG from "@images/arrow-down.svg";
import { SmallLogo } from "@components";
import { Formik } from "formik";
import * as Yup from "yup";

const reviewSchema = Yup.object().shape({
  number: Yup.string().matches(new RegExp("[0-9]{7}")).required("Required"),
});

export const PhonePage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Phone">) => {
  const { height, width } = useScreenSize();

  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryItem>();

  return (
    <View>
      <SmallLogo align={"left"} />
      <Pressable
        style={{
          position: "absolute",
          marginLeft: width * 0.09,
          marginTop: height * 0.07,
        }}
        onPress={() => navigation.goBack()}
      >
        <ArrowSVG />
      </Pressable>
      <Text style={{ marginTop: height * 0.17, marginRight: width * 0.085 }}>
        אימות בסמס
      </Text>
      <Text
        variant="secondary"
        style={{ marginTop: height * 0.017, marginRight: width * 0.085 }}
      >
        מרגש! זה הרגע להירשם ל - DoCare
      </Text>
      <View style={{ alignItems: "center" }}>
        <Pressable onPress={() => setShow(true)}>
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: "#D8DADC",
              marginTop: height * 0.06,
              alignItems: "center",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              width: width * 0.9,
              padding: 0.02 * height,
            }}
          >
            <View style={{ flexDirection: "row-reverse" }}>
              <Text variant="secondary">{countryCode?.flag}</Text>
              <Text variant="secondary" style={{ marginRight: width * 0.04 }}>
                {countryCode?.name.he}
              </Text>
            </View>
            <ArrowDSVG />
          </View>
        </Pressable>

        <Formik
          initialValues={{ name: "", number: "" }}
          validationSchema={reviewSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            navigation.navigate("SMS");
          }}
        >
          {(props) => (
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#D8DADC",
                  alignItems: "center",
                  flexDirection: "row",
                  width: width * 0.9,
                  padding: 0.02 * height,
                }}
              >
                <Text
                  style={{
                    borderColor: "#D8DADC",
                    borderRightWidth: 1,
                    paddingRight: width * 0.03,
                  }}
                  variant="secondary"
                >
                  {countryCode?.dial_code}
                </Text>
                <TextInput
                  keyboardType="numeric"
                  style={{ marginLeft: width * 0.03 }}
                  placeholder="00 00 00 000"
                  onChangeText={props.handleChange("number")}
                  value={props.values.number}
                />
              </View>
              <Button
                text="לחץ לקבלת קוד לנייד"
                onPress={() => {
                  props.submitForm();
                }}
                style={{
                  marginTop: height * 0.1,
                  backgroundColor: "#1F1F1F",
                  width: width * 0.9,
                }}
                textStyle={{ color: "#FFFEF9" }}
              />
            </View>
          )}
        </Formik>
      </View>

      <CountryPicker
        lang="he"
        show={show}
        showOnly={["IL"]}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setCountryCode(item);
          console.log(item);
          setShow(false);
        }}
      />
    </View>
  );
};
