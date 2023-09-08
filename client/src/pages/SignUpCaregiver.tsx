import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text } from "../design-system";
import { RootStackParamList } from "../types/RootStackParamList ";
import { useScreenSize } from "../hooks/useScreenSize";
import { Image, View } from "react-native";
import SignUpModal from "../components/SignUpModal";
import React, { useState } from "react";

export const SignUpCaregiver = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "SignCaregiver">) => {
  const { height, width } = useScreenSize();

  return (
    <View>
      <SignUpModal />
    </View>
  );
};
