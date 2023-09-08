import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  StyleSheet,
} from "react-native";

type TextProps = NativeTextInputProps;

export const TextInput = ({ children, style, ...props }: TextProps) => {
  return (
    <NativeTextInput style={[styles.default, style]} {...props}>
      {children}
    </NativeTextInput>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: "Anomalia",
    color: "#1F1F1F",
    fontSize: 16,
    lineHeight: 40,
    letterSpacing: -0.3,
  },
});
