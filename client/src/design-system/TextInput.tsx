import {
  StyleSheet,
  TextStyle,
  TextInput as NativeTextInput,
} from "react-native";
import { isUndefined } from "lodash";

type TextProps = {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  varinat?: "title" | "secondary" | "button";
} & TextStyle &
  React.PropsWithChildren;

type FontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | undefined;

const makeTextBold = (fontWeight: FontWeight) => {
  if (isUndefined(fontWeight)) {
    return {};
  }

  return { fontFamily: fontWeight === "bold" ? "AnomaliaBold" : "Anomalia" };
};

export const TextInput = ({
  value,
  onChangeText,
  placeholder,
  children,
  varinat = "title",
  fontWeight,
  ...props
}: TextProps) => {
  return (
    <NativeTextInput
      style={{
        ...styles[varinat],
        ...props,
        ...makeTextBold(fontWeight),
      }}
    >
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
    textAlign: "center",
  },
  button: {
    fontFamily: "AnomaliaBold",
    color: "#1F1F1F",
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
  },
  secondary: {
    fontFamily: "Anomalia",
    color: "rgba(0, 0, 0, 0.70)",
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
  },
});
