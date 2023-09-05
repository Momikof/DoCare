import { View as NativeView, ViewStyle } from "react-native";

export const View = ({
  children,
  ...props
}: ViewStyle & React.PropsWithChildren) => {
  return <NativeView style={{ ...props }}>{children}</NativeView>;
};
