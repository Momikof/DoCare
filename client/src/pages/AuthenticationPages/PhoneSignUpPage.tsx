import { Image, View } from "react-native";
import { RootStackParamList } from "../../types/RootStackParamList ";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WhiteCircle } from "../../components/WhiteCircle";
import { useScreenSize } from "../../hooks/useScreenSize";
import { Button, Text, TextInput } from "../../design-system";
import { Formik } from "formik";
import * as Yup from "yup";

const reviewSchema = Yup.object().shape({
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const PhoneSignUpPage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "PhoneSignUp">) => {
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
          <Image source={require("../../../assets/images/garden.png")} />
        </WhiteCircle>
        <Text style={{ marginTop: height * 0.02 }}>הרשמה בסמס</Text>

        <Formik
          initialValues={{ firstName: "", lastName: "" }}
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
                placeholder="שם פרטי"
                onChangeText={props.handleChange("firstName")}
                value={props.values.firstName}
                style={{ marginTop: height * 0.04 }}
              />
              {/* <Text>{props.touched.fullName && props.errors.fullName}</Text> */}

              <TextInput
                placeholder="שם משפחה"
                onChangeText={props.handleChange("lastName")}
                value={props.values.lastName}
                style={{ marginTop: height * 0.02 }}
              />
              {/* <Text>{props.touched.email && props.errors.email}</Text> */}

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
