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
    width: "95%",
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#1F1F1F",
    borderRadius: 10,
    backgroundColor: "#1F1F1F",
  },
});
