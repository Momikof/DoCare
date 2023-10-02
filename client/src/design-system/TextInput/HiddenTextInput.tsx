import { forwardRef, useCallback, useState } from "react";
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import CrossedEyeSVG from "@images/crossed-eye.svg";

type HiddenTextInputProps = {
  nextInput?: React.MutableRefObject<NativeTextInput>;
} & NativeTextInputProps;

export const HiddenTextInput = forwardRef<
  NativeTextInput,
  HiddenTextInputProps
>(({ children, style, nextInput, ...props }, ref) => {
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
          left: 16,
        }}
        onPress={onEyePress}
      >
        <CrossedEyeSVG />
      </Pressable>
      <NativeTextInput
        ref={ref}
        blurOnSubmit={false}
        onSubmitEditing={() => {
          nextInput?.current?.focus();
        }}
        returnKeyType="next"
        secureTextEntry={isHidden}
        style={[styles.default, style]}
        {...props}
      >
        {children}
      </NativeTextInput>
    </View>
  );
});

const styles = StyleSheet.create({
  default: {
    fontFamily: "Anomalia",
    color: "#1F1F1F",
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 16,
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
