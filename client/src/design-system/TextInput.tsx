import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  StyleSheet,
} from "react-native";

type TextProps = {
  varinat?: "title" | "secondary" | "button";
} & NativeTextInputProps;

export const TextInput = ({
  children,
  style,
  varinat = "title",
  ...props
}: TextProps) => {
  return (
    <NativeTextInput style={[style]} {...props}>
      {children}
    </NativeTextInput>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "AnomaliaBold",
    color: "#1F1F1F",
    fontSize: 30,
    lineHeight: 40,
    letterSpacing: -0.3,
  },
  button: {
    fontFamily: "AnomaliaBold",
    color: "#1F1F1F",
    fontSize: 16,
    lineHeight: 20,
  },
  secondary: {
    fontFamily: "Anomalia",
    color: "rgba(0, 0, 0, 0.70)",
    fontSize: 16,
    lineHeight: 20,
  },
});
