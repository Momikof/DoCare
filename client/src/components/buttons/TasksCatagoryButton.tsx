import React from "react";
import { DimensionValue, TextStyle, ViewStyle } from "react-native";
import { Pressable, Text } from "react-native";

interface ITasksCatagoryButtonProps {
    buttonText: string;
    backgroundColor: string;
    fontSize?: number;
    width?: DimensionValue;
    additionalStyle?: ViewStyle;
    additionalTextStyle?: TextStyle;
}
export const TasksCatagoryButton = ({buttonText, backgroundColor, additionalStyle, additionalTextStyle, width = 100, fontSize = 12} : ITasksCatagoryButtonProps)  => {
  return (
    <Pressable
      style={{
        backgroundColor,
        width,
        height: 50,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        ...additionalStyle
      }}
    >
    <Text style={{ fontSize, ...additionalTextStyle }}>
      {buttonText}
    </Text>
    </Pressable>
  );
};
