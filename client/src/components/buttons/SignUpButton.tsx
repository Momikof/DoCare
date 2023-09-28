import { Pressable } from "react-native";
import { buttonStyles, Text } from "@design-system";
import { useScreenSize } from "@hooks";

type SignUpButtonProps = {
  onClick: VoidFunction;
};

export const SignUpButton = ({ onClick }: SignUpButtonProps) => {
  const { height } = useScreenSize();

  return (
    <Pressable
      style={[
        buttonStyles.default,
        {
          marginTop: height * 0.015,
        },
      ]}
      onPress={onClick}
    >
      <Text
        variant="button"
        style={{ color: "#FFFEF9", fontFamily: "Anomalia" }}
      >
        משתמש/ת חדש/ה
      </Text>
      <Text variant="button" style={{ marginLeft: 4, color: "#FFFEF9" }}>
        הרשמ/י כעת!
      </Text>
    </Pressable>
  );
};
