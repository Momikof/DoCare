import React from "react";
import { Alert, Share } from "react-native";
import { Button, View } from "../design-system";
import { useScreenSize } from "../hooks/useScreenSize";

const ShareExample = () => {
  const { height } = useScreenSize();
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
    <View alignItems="center">
      <Button
        text="ספר לחברים"
        onPress={onShare}
        buttonStyle={{ marginTop: height * 0.1, backgroundColor: "#FFFEF9" }}
      />
    </View>
  );
};

export default ShareExample;
