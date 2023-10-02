import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text } from "@design-system";
import { RootStackParamList } from "@types";
import { useScreenSize } from "@hooks";
import { Pressable, View } from "react-native";
import React, { useState } from "react";
import ArrowSVG from "@images/arrow-right.svg";
import { SmallLogo } from "@components";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
//@ts-ignore
import SlideToConfirm from "rn-slide-to-confirm";

const CELL_COUNT = 4;

export const SMSPage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "SMS">) => {
  const { height, width } = useScreenSize();
  const [value, setValue] = useState("");
  const [sliderState, setSliderState] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View>
      <SmallLogo align={"left"} />
      <Pressable
        style={{
          position: "absolute",
          marginLeft: width * 0.09,
          marginTop: height * 0.07,
        }}
        onPress={() => navigation.goBack()}
      >
        <ArrowSVG />
      </Pressable>
      <Text style={{ marginTop: height * 0.17, marginRight: width * 0.085 }}>
        מעולה, ההודעה נשלחה!
      </Text>
      <Text
        variant="secondary"
        style={{ marginTop: height * 0.017, marginRight: width * 0.085 }}
      >
        שלחנו הודעה למספר שמסתיים ב- 8594
      </Text>
      <View
        style={{
          paddingHorizontal: 16,
          marginTop: height * 0.09,
        }}
      >
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              style={{
                textAlign: "center",
                textAlignVertical: "center",
                borderColor: "#D8DADC",
                borderWidth: 1,
                width: width * 0.2,
                height: height * 0.09,
                borderRadius: 15,
              }}
              key={index}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <View style={{ alignItems: "center", marginTop: height * 0.05 }}>
          <SlideToConfirm
            unconfimredTipText={"החלק לאישור ואת/ה כבר שם!"}
            unconfirmedTipTextStyle={{
              fontSize: 16,
              fontFamily: "Anomalia",
              color: "#FFFEF9",
              lineHeight: 20,
            }}
            confirmedTipText={"מאושר"}
            confirmedTipTextStyle={{
              fontSize: 16,
              fontFamily: "Anomalia",
              color: "#FFFEF9",
              lineHeight: 20,
            }}
            state={sliderState}
            onSlideConfirmed={() => {
              setSliderState(true);
              navigation.navigate("Roles");
            }}
            sliderStyle={{
              width: width * 0.95,
              justifyContent: "center",
              padding: 10,
              borderWidth: 1,
              borderColor: "#1F1F1F",
              borderRadius: 10,
              backgroundColor: "#1F1F1F",
              overflow: "hidden",
            }}
          />
          <Text style={{ marginTop: height * 0.05 }} variant="secondary">
            הקוד ישלח מחדש בעוד 00:20
          </Text>
        </View>
      </View>
    </View>
  );
};
