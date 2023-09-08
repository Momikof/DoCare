import { DimensionValue, View, ViewProps } from "react-native";

type WhiteCircleProps = {
  size: DimensionValue;
} & ViewProps;

export const WhiteCircle = ({
  children,
  style,
  size,
  ...props
}: WhiteCircleProps) => {
  return (
    <View
      style={[
        {
          backgroundColor: "white",
          width: size,
          height: size,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: Number.MAX_SAFE_INTEGER,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};
