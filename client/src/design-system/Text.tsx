import { StyleSheet, TextStyle, Text as NativeText } from "react-native";

type TextProps = {
  varinat?: "title" | "secondary" | "button";
} & TextStyle &
  React.PropsWithChildren;

export const Text = ({ children, varinat = "title", ...props }: TextProps) => {
  return (
    <NativeText style={{ ...styles[varinat], ...props }}>{children}</NativeText>
  );
};

const styles = StyleSheet.create({
  title: {
    // fontFamily: "Anomalia",
    color: "#1F1F1F",
    fontSize: 30,
    lineHeight: 40,
    letterSpacing: -0.3,
    fontWeight: "500",
    textAlign: "center",
  },
  button: {
    // fontFamily: "Anomalia",
    color: "#1F1F1F",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  secondary: {
    // fontFamily: "Anomalia",
    color: "rgba(0, 0, 0, 0.70)",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "300",
    textAlign: "center",
  },
});
