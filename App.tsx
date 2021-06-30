import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import Address from "./Screens/Address";
import PinValidation from "./Screens/PinValidation";
import Lattitude from "./Screens/Lattitude";

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  PinValidation: {
    screen: PinValidation,
  },
  Register: {
    screen: RegisterScreen,
  },
  Add: {
    screen: Address,
  },
  Lat: {
    screen: Lattitude,
  },
});

export default createAppContainer(AppNavigator);
