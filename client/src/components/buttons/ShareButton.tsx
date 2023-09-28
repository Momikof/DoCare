import React from "react";
import { Alert, Pressable, Share, ViewStyle } from "react-native";
import { useScreenSize } from "@hooks";
import { View } from "react-native";
import { WhiteCircle } from "../WhiteCircle";

interface ShareExampleProps {
  message: string;
  svgImage: React.ReactNode;
  style?: ViewStyle; // Style prop for custom styling
}

const ShareExample: React.FC<ShareExampleProps> = ({
  message,
  svgImage,
  style,
}) => {
  const { height, width } = useScreenSize();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert((error as Error).message);
    }
  };

  return (
    <View style={style}>
      <Pressable onPress={onShare}>
        <WhiteCircle size={width * 0.13}>{svgImage}</WhiteCircle>
      </Pressable>
    </View>
  );
};

export default ShareExample;
