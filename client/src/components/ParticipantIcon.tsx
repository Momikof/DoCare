import React from "react";
import { View, StyleProp, ViewStyle, useWindowDimensions } from "react-native";
import { WhiteCircle } from "./WhiteCircle";
import { Text } from "../design-system/Text";
import LineSVG from "@images/tiny-line.svg";

interface ParticipantIconProps {
  text: string;
  svgComponent: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const ParticipantIcon: React.FC<ParticipantIconProps> = ({
  text,
  svgComponent,
  style,
}) => {
  const { height, width } = useWindowDimensions();

  return (
    <View style={[{ alignItems: "center" }, style]}>
      <WhiteCircle
        size={width * 0.15}
        style={{
          backgroundColor: "#EFE7FF",
          borderRadius: 100,
          borderColor: "#1F1F1F",
          borderWidth: 1,
        }}
      >
        <View
          style={{
            height: "85%",
            width: "85%",
            borderRadius: 100,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {svgComponent}
        </View>
      </WhiteCircle>
      <Text
        style={{
          position: "relative",
          bottom: height * 0.01,
          fontSize: 14,
          marginLeft: width * 0.01,
        }}
      >
        {text}
      </Text>
      <View
        style={{
          position: "relative",
          bottom: height * 0.13,
          marginLeft: width * 0.12,
        }}
      >
        <WhiteCircle
          size={width * 0.07}
          style={{
            backgroundColor: "#EFE7FF",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFFEF9",
              height: "75%",
              width: "75%",
              borderRadius: 100,
              borderColor: "#1F1F1F",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LineSVG />
          </View>
        </WhiteCircle>
      </View>
    </View>
  );
};

export default ParticipantIcon;
