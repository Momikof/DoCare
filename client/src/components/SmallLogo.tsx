import { useScreenSize } from "@hooks";
import DoSmallSVG from "@images/do-small.svg";

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
    <DoSmallSVG
      style={{
        position: "absolute",
        marginTop: height * 0.06,
        marginLeft: width * logoAlignment[align],
      }}
    />
  );
};
