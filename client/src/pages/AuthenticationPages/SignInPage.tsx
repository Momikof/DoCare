import { Image, View } from "react-native";
import { RootStackParamList } from "../../types/RootStackParamList ";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WhiteCircle } from "../../components/WhiteCircle";
import { useScreenSize } from "../../hooks/useScreenSize";
import { Button, Text, TextInput } from "../../design-system";
import { Formik } from "formik";
import * as Yup from "yup";

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

export const SignInPage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "SignIn">) => {
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
          {/* might want to change this image to just be the text flipped, or get a better resultion image @_@ */}
          <Image source={require("../../../assets/images/garden.png")} />
        </WhiteCircle>
        <Text>צרו חשבון</Text>

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
                width: "100%",
                height: "100%",
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="איך קוראים לך?"
                onChangeText={props.handleChange("name")}
                value={props.values.name}
              />
              {/* only if the left value is a valid string, will the right value be displayed */}
              <Text>{props.touched.name && props.errors.name}</Text>

              <TextInput
                secureTextEntry
                placeholder="מס' הטלפון של הCAREGIVER"
                onChangeText={props.handleChange("number")}
                value={props.values.number}
              />
              <Text>{props.touched.number && props.errors.number}</Text>

              <Button
                text="הירשמ/י עכשיו (:"
                onPress={() => {
                  props.submitForm();
                }}
                style={{
                  marginTop: height * 0.015,
                }}
                textStyle={{ color: "#FFFEF9" }}
              />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};
