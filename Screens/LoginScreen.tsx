import { Header } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class LoginScreen extends React.Component<Props> {
  state = {
    phone: "",
    phoneError: "",
  };
  phoneValidator() {
    if (this.state.phone == "" && this.state.phone.length != 10) {
      this.setState({
        phoneError: "enter valid number",
      });
    } else if (this.state.phone.length != 10) {
      this.setState({
        phoneError: "number must be 10 digit",
      });
    } else {
      this.setState({ phoneError: "" });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Phone"
          onBlur={() => this.phoneValidator()}
          keyboardType={"numeric"}
          maxLength={10}
          onChangeText={(text) => {
            this.setState({ phone: text });
          }}
          style={[styles.input]}
        />
        <Text style={styles.text}>{this.state.phoneError}</Text>
        <View style={styles.submit}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("PinValidation")}
          >
            <Text style={styles.submitText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submit}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Register");
            }}
          >
            <Text style={styles.submitText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#fbf2d4",
  },
  input: {
    borderColor: "#939597",
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    width: 300,
    marginTop: 50,
    marginLeft: 20,
    backgroundColor: "white",
    padding: 10,
    fontSize: 16,
  },
  submit: {
    // marginRight: 40,
    marginLeft: 20,
    marginTop: 10,
    width: "85%",
  },
  submitText: {
    paddingTop: 10,
    paddingBottom: 10,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#2e8b57",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  text: {
    color: "red",
    marginLeft: 25,
    fontSize: 15,
  },
});

export default LoginScreen;
