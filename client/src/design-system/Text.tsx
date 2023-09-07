import { TextProps as NativeTextProps, StyleSheet } from "react-native";

type TextProps = {
  variant?: keyof typeof styles;
} & NativeTextProps;

export const Text = ({
  variant = "title",
  style,
  children,
  ...props
}: TextProps) => {
  return (
    <Text style={[styles[variant], style]} {...props}>
      {children}
    </Text>
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
