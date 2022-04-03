import { createDrawerNavigator } from "@react-navigation/drawer";
import ChatScreen from "../screens/ChatScreen";
import FindScreen from "../screens/FindScreen";
import SettingScreen from "../screens/SettingScreen";
import tabs from "./tabs";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Kitchen Chimney Service"
        component={tabs}   />
      <Drawer.Screen name="Chat"
        component={ChatScreen} />

      <Drawer.Screen name="Find"
        component={FindScreen} />
      <Drawer.Screen name="Setting"
        component={SettingScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;