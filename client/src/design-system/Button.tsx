import { TextStyle, PressableProps, Pressable, StyleSheet } from "react-native";
import { Text } from "./Text";

type ButtonProps = {
  text: string;
  textStyle?: TextStyle;
} & PressableProps;

export const Button = ({ text, textStyle, style, ...props }: ButtonProps) => {
  return (
    <Pressable style={[buttonStyles.default, style as any]} {...props}>
      <Text variant="button" style={textStyle}>
        {text}
      </Text>
    </Pressable>
  );
};

export const buttonStyles = StyleSheet.create({
  default: {
    width: "90%",
    padding: 16,
    borderwidth: 1,
    bordercolor: "#1F1F1F",
    borderradius: 10,
    backgroundcolor: "#1F1F1F",
  },
});
