import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import MyDrawer from "./navigation/drawerNavigation";
import React from "react";

const App = () => {
  return (
    <>
      <NavigationContainer>
      
      <MyDrawer/>

    </NavigationContainer>
      {/* <NavigationContainer>
        <Tabs />
      </NavigationContainer> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
