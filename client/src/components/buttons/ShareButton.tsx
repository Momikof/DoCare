import React from "react";
import { Alert, Pressable, Share } from "react-native";
import { Button, Text } from "@design-system";
import { useScreenSize } from "@hooks";
import { View } from "react-native";
import ShareSVG from "@images/share-icon.svg";
import { WhiteCircle } from "../WhiteCircle";

const ShareExample = () => {
  const { height, width } = useScreenSize();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "הצטרפו ל-do care כדי לעזור מכל הלב במה שהאנשים הקרובים אליכם באמת צריכים",
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
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <View>
      <Pressable onPress={onShare}>
        <WhiteCircle
          size={width * 0.13}
          style={{
            marginTop: height * 0.34,
            marginLeft: width * 0.78,
          }}
        >
          <ShareSVG />
        </WhiteCircle>
      </Pressable>
    </View>
  );
};

export default ShareExample;
