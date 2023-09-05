import { Pressable as NativePressable, ViewStyle } from "react-native";

type PressableProps = {
  onPress: VoidFunction;
};

export const Pressable = ({
  children,
  onPress,
  ...props
}: ViewStyle & PressableProps & React.PropsWithChildren) => {
  return (
    <NativePressable onPress={onPress} style={{ ...props }}>
      {children}
    </NativePressable>
  );
};
