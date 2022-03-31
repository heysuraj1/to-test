import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import FindScreen from "../screens/FindScreen";
import PostScreen from "../screens/PostScreen";
import SettingScreen from "../screens/SettingScreen";
import { View, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const Tabs = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: true,
          tabBarStyle: {
            position: "absolute",
            bottom: 15,
            left: 20,
            right: 20,
            borderRadius: 15,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown:false,

            tabBarIcon: ({ focused }) => (
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
                }}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerShown:false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={{
                  uri: "http://cdn.onlinewebfonts.com/svg/img_381628.png",
                }}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
        
          name="Find"
          component={FindScreen}
          options={{
            headerShown:false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={{
                  uri: "http://cdn.onlinewebfonts.com/svg/img_536022.png",
                }}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={PostScreen}
          options={{
            headerShown:false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={{
                  uri: "http://cdn.onlinewebfonts.com/svg/img_262791.png",
                }}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            headerShown:false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png",
                }}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const Another = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Chat" component={ChatScreen} />

      <Drawer.Screen name="Find" component={FindScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
};
export default Another && Tabs;
