import {
  Pressable as NativePressable,
  PressableProps,
  ViewStyle,
} from "react-native";

export const Pressable = ({
  children,
  ...props
}: ViewStyle & PressableProps & React.PropsWithChildren) => {
  return <NativePressable style={{ ...props }}>{children}</NativePressable>;
};
