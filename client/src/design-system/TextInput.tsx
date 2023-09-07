import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
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
