import { useCallback, useState } from "react";
import {
  Image,
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

type HiddenTextProps = NativeTextInputProps;

export const HiddenTextInput = ({
  children,
  style,
  ...props
}: HiddenTextProps) => {
  const [isHidden, setIsHidden] = useState(true);

  const onEyePress = useCallback(() => {
    setIsHidden((previousValue) => !previousValue);
  }, []);

  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Pressable
        style={{
          position: "absolute",
          zIndex: 1,
          padding: 12,
          top: "35%",
          right: 16,
        }}
        onPress={onEyePress}
      >
        <Image source={require("../../../assets/images/crossed-eye.png")} />
      </Pressable>
      <NativeTextInput
        secureTextEntry={isHidden}
        style={[styles.default, style]}
        {...props}
      >
        {children}
      </NativeTextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: "Anomalia",
    color: "#1F1F1F",
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 16,
    lineHeight: 20,
    letterSpacing: -0.3,
    backgroundColor: "#FFFEF9",
    borderWidth: 1,
    borderColor: "#D8DADC",
    borderRadius: 10,
    width: "95%",
    textAlign: "right",
  },
});
