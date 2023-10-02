import React from "react";
import { View, useWindowDimensions } from "react-native";
import { WhiteCircle } from "@components";
import DudeSVG from "@images/do-black.svg";
import EditSVG from "@images/edit-icon.svg";

interface ProfilePictureProps {
  variant: "dark" | "light"; // Color variant can be either 'dark' or 'light'
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ variant }) => {
  const { height, width } = useWindowDimensions();

  const circleBackgroundColor = variant === "dark" ? "#A99CFE" : "#EFE7FF";
  const editCircleBackgroundColor = variant === "dark" ? "#A99CFE" : "#EFE7FF";

  return (
    <View>
      <WhiteCircle
        size={width * 0.625}
        style={{
          marginTop: height * 0.085,
          borderColor: "#1F1F1F",
          borderWidth: 1,
        }}
      >
        <View
          style={{
            backgroundColor: circleBackgroundColor,
            height: "92%",
            width: "92%",
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DudeSVG />
        </View>
      </WhiteCircle>
      <WhiteCircle
        size={width * 0.18}
        style={{
          position: "absolute",
          marginTop: height * 0.28,
          marginLeft: width * 0.48,
        }}
      >
        <View
          style={{
            backgroundColor: editCircleBackgroundColor,
            height: "75%",
            width: "75%",
            borderRadius: 100,
            borderColor: "#1F1F1F",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EditSVG />
        </View>
      </WhiteCircle>
    </View>
  );
};

export default ProfilePicture;
