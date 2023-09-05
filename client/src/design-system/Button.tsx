import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Text } from "./Text";

type ButtonProps = {
  text: string;
  onPress: VoidFunction;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
};

export const Button = ({
  text,
  onPress,
  buttonStyle,
  textStyle,
}: ButtonProps) => {
  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text varinat="button" {...textStyle}>
        {text}
      </Text>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  button: {
    width: "90%",
    padding: 16,
    borderWidth: 1,
    borderColor: "#1F1F1F",
    borderRadius: 10,
    backgroundColor: "#1F1F1F",
  },
});
