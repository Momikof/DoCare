import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "@pages";
import HomeSVG from "@images/home-icon.svg";
import HomeActiveSVG from "@images/home-icon-active.svg";
import CalendarSVG from "@images/calendar-icon.svg";
import CalendarActiveSVG from "@images/calendar-icon-active.svg";
import FileSVG from "@images/file-icon.svg";
import GroupSVG from "@images/group-icon.svg";
import GroupActiveSVG from "@images/group-icon-active.svg";
import BackgroundSVG from "@images/tab-navigation.svg";
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? <HomeActiveSVG /> : <HomeSVG />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={HomePage}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? <CalendarActiveSVG /> : <CalendarSVG />,
        }}
      />

      <Tab.Screen
        name="File"
        component={HomePage}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <FileSVG />,
        }}
      />
      <Tab.Screen
        name="Groups"
        component={HomePage}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? <GroupActiveSVG /> : <GroupSVG />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
