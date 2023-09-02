import {
    ImageSourcePropType,
    ImageStyle,
    Image as NativeImage,
  } from "react-native";
  
  type ImageProps = {
    source: ImageSourcePropType;
  } & ImageStyle;
  
  export const Image = ({ source, ...props }: ImageProps) => {
    return <NativeImage source={source} style={{ ...props }} />;
  };
  