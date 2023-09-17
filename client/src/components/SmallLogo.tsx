import DoSmallSVG from "@images/do-small.svg";
import { useWindowDimensions } from "react-native";

type SmallLogoProps = {
  align: keyof typeof logoAlignment;
};

const logoAlignment = {
  left: 0.8,
  right: 0.1,
};

export const SmallLogo = ({ align }: SmallLogoProps) => {
  const { height, width } = useWindowDimensions();

  return (
    <DoSmallSVG
      style={{
        position: "absolute",
        marginTop: height * 0.06,
        marginLeft: width * logoAlignment[align],
      }}
    />
  );
};
