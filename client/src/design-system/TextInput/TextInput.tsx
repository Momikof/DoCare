import { forwardRef } from "react";
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  StyleSheet,
} from "react-native";

type TextInputProps = {
  nextInput?: React.MutableRefObject<NativeTextInput>;
} & NativeTextInputProps;

export const TextInput = forwardRef<NativeTextInput, TextInputProps>(
  ({ children, style, nextInput, ...props }, ref) => {
    return (
      <NativeTextInput
        ref={ref}
        blurOnSubmit={false}
        onSubmitEditing={() => {
          nextInput?.current?.focus();
        }}
        returnKeyType="next"
        style={[styles.default, style]}
        {...props}
      >
        {children}
      </NativeTextInput>
    );
  }
);

const styles = StyleSheet.create({
  default: {
    fontFamily: "Anomalia",
    color: "#1F1F1F",
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 16,
    lineHeight: 20,
    letterSpacing: -0.3,
    backgroundColor: "#FFFEF9",
    borderWidth: 1,
    borderColor: "#D8DADC",
    borderRadius: 10,
    width: "95%",
    textAlign: "right",
  },
});
