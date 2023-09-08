import { Image } from "react-native";
import { useScreenSize } from "../hooks/useScreenSize";

type SmallLogoProps = {
  align: keyof typeof logoAlignment;
};

const logoAlignment = {
  left: 0.8,
  right: 0.1,
};

export const SmallLogo = ({ align }: SmallLogoProps) => {
  const { height, width } = useScreenSize();

  return (
    <Image
      style={{
        position: "absolute",
        marginTop: height * 0.06,
        marginLeft: width * logoAlignment[align],
      }}
      source={require("../../assets/images/do.png")}
    />
  );
};
