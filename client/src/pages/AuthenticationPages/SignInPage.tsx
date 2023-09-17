import { View, useWindowDimensions } from "react-native";
import { RootStackParamList } from "@types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WhiteCircle } from "@components";
import { Button, HiddenTextInput, Text, TextInput } from "@design-system";
import { Formik } from "formik";
import * as Yup from "yup";
import GardenSVG from "@images/garden.svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRef } from "react";

const reviewSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=^.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number"
    ),
});

export const SignInPage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "SignIn">) => {
  const { height, width } = useWindowDimensions();
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
      <Text style={{ marginTop: height * 0.02 }}>התחברות </Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
            }}
          >
            <TextInput
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
              style={{ marginTop: height * 0.02 }}
              blurOnSubmit={true}
            />
            {/* <Text>{props.touched.password && props.errors.password}</Text> */}

            <Button
              text="הקליקו להתחברות (:"
              onPress={() => {
                props.submitForm();
              }}
              style={{
                marginTop: height * 0.04,
              }}
              textStyle={{ color: "#FFFEF9" }}
            />
            <Text
              variant="link"
              style={{ textAlign: "center", marginTop: height * 0.025 }}
            >
              התחברות דרך גוגל
            </Text>

            <View
              style={{
                justifyContent: "center",
                marginTop: height * 0.075,
                paddingBottom: height * 0.06,
              }}
            >
              <Text variant="secondary">בכניסה לחשבון הינך מסכימ/ה</Text>
              <Text variant="link" style={{ textAlign: "center" }}>
                לתקנון השימוש שלנו
              </Text>
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};
