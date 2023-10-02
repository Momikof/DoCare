import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text } from "@design-system";
import { RootStackParamList } from "@types";
import { SignUpButton, SmallLogo } from "@components";
import { useCallback, useState } from "react";
import { Pressable, View, useWindowDimensions } from "react-native";
import LogoSVG from "@images/logo.svg";
import PeopleHugging from "@images/people-hugging.svg";
import WhiteFadeOverlay from "@images/white-fade-overlay.svg";
import { getDifferentRandomGreeting } from "../../../helpers/greetings";
import { TasksCatagoryButton } from "../../../components/buttons/TasksCatagoryButton";
import { Task } from "../../../components/task/Task";

export const TasksPage = ({navigation}: NativeStackScreenProps<
  RootStackParamList,
  "Home"
>) => {
  const { height, width } = useWindowDimensions();
  const username = "מיכל"
  const [greeting, setGreeting] = useState(getDifferentRandomGreeting(username, ""))
  return (
    <View>
      <Pressable onPress={()=>console.log("j")}> <Text>I'm pressable!</ Text> </Pressable>
      <PeopleHugging style={{ marginTop: width * -0.15 }} />  
      <WhiteFadeOverlay style={{ position: "absolute" }} />
      <Pressable style={{position:"absolute"}} onPress={()=>console.log("f")} >
        <SmallLogo align={"left"} />
      </Pressable>
      <Text
        style={{ top: height * 0.06, position: "absolute", left: width * 0.04 }}
      >
        {greeting}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: -15,
          width: width * 0.93,
          alignSelf: "center",
        }}
      >
        <TasksCatagoryButton buttonText="משימות פנויות" backgroundColor="white"/>
        <TasksCatagoryButton buttonText="כל המשימות" backgroundColor="#EFE7FF"/>
        <TasksCatagoryButton buttonText="משימות שביצעתי" backgroundColor="#A99CFE"/>
      </View>
      <Task isUrgent={true} location="test" title="MOCK TASK" assignedUserId="123123"/>
    </View>
  );
};
