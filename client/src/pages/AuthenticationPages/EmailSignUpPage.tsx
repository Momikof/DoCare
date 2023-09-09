import { Image, View } from "react-native";
import { RootStackParamList } from "../../types/RootStackParamList ";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WhiteCircle } from "../../components/WhiteCircle";
import { useScreenSize } from "../../hooks/useScreenSize";
import { Button, HiddenTextInput, Text, TextInput } from "../../design-system";
import { Formik } from "formik";
import * as Yup from "yup";
import GardenSVG from "../../../assets/images/garden.svg";

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
  const { height, width } = useScreenSize();

  return (
    <View
      style={{
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 18,
      }}
    >
      <View
        style={{
          backgroundColor: "#EFE7FF",
          borderRadius: 32,
          alignItems: "center",
          width: "100%",
          height: "100%",
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
                height: "100%",
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="שם מלא"
                onChangeText={props.handleChange("fullName")}
                value={props.values.fullName}
                style={{ marginTop: height * 0.04 }}
              />
              {/* <Text>{props.touched.fullName && props.errors.fullName}</Text> */}

              <TextInput
                placeholder="כתובת המייל שלך"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
                style={{ marginTop: height * 0.02 }}
              />
              {/* <Text>{props.touched.email && props.errors.email}</Text> */}

              <HiddenTextInput
                placeholder="סיסמה"
                onChangeText={props.handleChange("password")}
                value={props.values.password}
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

              <View
                style={{ justifyContent: "center", marginTop: height * 0.05 }}
              >
                <Text variant="secondary">
                  ביצירת/כניסה לחשבון הינך מסכימ/ה
                </Text>
                <Text variant="link" style={{ textAlign: "center" }}>
                  לתקנון השימוש שלנו
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};
