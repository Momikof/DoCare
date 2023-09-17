import { View, useWindowDimensions } from "react-native";
import { RootStackParamList } from "@types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WhiteCircle } from "@components";
import { Button, HiddenTextInput, Text, TextInput } from "@design-system";
import { Formik } from "formik";
import * as Yup from "yup";
import GardenSVG from "@images/garden.svg";
import { useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const reviewSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=^.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number"
    ),
});

export const EmailSignUpPage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "EmailSignUp">) => {
  const { height, width } = useWindowDimensions();
  const emailInputRef = useRef<any>();
  const passwordInputRef = useRef<any>();

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        marginVertical: 10,
        marginHorizontal: 18,
        backgroundColor: "#EFE7FF",
        borderRadius: 32,
        alignItems: "center",
      }}
    >
      <WhiteCircle size={width * 0.625} style={{ marginTop: height * 0.085 }}>
        <GardenSVG />
      </WhiteCircle>
      <Text style={{ marginTop: height * 0.02 }}>צרו חשבון</Text>

      <Formik
        initialValues={{ fullName: "", email: "", password: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="שם מלא"
              onChangeText={props.handleChange("fullName")}
              value={props.values.fullName}
              style={{ marginTop: height * 0.04 }}
              nextInput={emailInputRef}
            />
            {/* <Text>{props.touched.fullName && props.errors.fullName}</Text> */}

            <TextInput
              ref={emailInputRef}
              placeholder="כתובת המייל שלך"
              onChangeText={props.handleChange("email")}
              value={props.values.email}
              style={{ marginTop: height * 0.02 }}
              nextInput={passwordInputRef}
            />
            {/* <Text>{props.touched.email && props.errors.email}</Text> */}

            <HiddenTextInput
              ref={passwordInputRef}
              placeholder="סיסמה"
              onChangeText={props.handleChange("password")}
              value={props.values.password}
              blurOnSubmit={true}
              style={{ marginTop: height * 0.02 }}
            />
            {/* <Text>{props.touched.password && props.errors.password}</Text> */}

            <Button
              text="הירשמ/י עכשיו (:"
              onPress={() => {
                props.submitForm();
              }}
              style={{
                marginTop: height * 0.04,
              }}
              textStyle={{ color: "#FFFEF9" }}
            />
          </View>
        )}
      </Formik>
      <View
        style={{
          justifyContent: "center",
          marginTop: height * 0.05,
          paddingBottom: 24,
        }}
      >
        <Text variant="secondary">ביצירת חשבון הינך מסכימ/ה</Text>
        <Text variant="link" style={{ textAlign: "center" }}>
          לתקנון השימוש שלנו
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};
