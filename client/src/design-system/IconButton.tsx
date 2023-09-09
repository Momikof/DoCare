import {
  TextStyle,
  PressableProps,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "./Text";

type IconButtonProps = {
  text: string;
  icon: React.ReactNode;
  textStyle?: TextStyle;
} & PressableProps;

export const IconButton = ({
  text,
  textStyle,
  style,
  icon,
  ...props
}: IconButtonProps) => {
  return (
    <Pressable style={[styles.default, style as any]} {...props}>
      <View style={{ width: 20 }}>{icon}</View>
      <Text variant="button" style={textStyle}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  default: {
    width: "90%",
    flexDirection: "row",
    alignContent: "flex-start",
    flexWrap: "wrap",
    columnGap: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "#D8DADC",
    borderRadius: 10,
    backgroundColor: "#FFFEF9",
  },
});
