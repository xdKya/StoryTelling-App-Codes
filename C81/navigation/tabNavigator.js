import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feed from "../screens/feed";
import CreateStory from "../screens/createStory";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreateStory" component={CreateStory} />
      </Tab.Navigator>
    );
  }
}
