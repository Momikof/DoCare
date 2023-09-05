import { Text, styles as buttonStyles } from "../design-system";
import { Pressable } from "../design-system/Pressable";
import { useScreenSize } from "../hooks/useScreenSize";

type SignUpButtonProps = {
  onClick: VoidFunction;
};

export const SignUpButton = ({ onClick }: SignUpButtonProps) => {
  const { height } = useScreenSize();

  return (
    <Pressable
      {...buttonStyles.button}
      flexDirection="row"
      marginTop={height * 0.015}
      justifyContent="center"
      onPress={onClick}
    >
      <Text varinat="button" color={"#FFFEF9"} fontWeight="300">
        משתמש/ת חדש/ה
      </Text>
      <Text varinat="button" marginLeft={4} color={"#FFFEF9"}>
        הרשמ/י כעת!
      </Text>
    </Pressable>
  );
};
