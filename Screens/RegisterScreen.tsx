import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
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

class RegisterScreen extends React.Component<Props> {
  state = {
    name: "",
    nameError: "",
    phone: "",
    phoneError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    show: true,
    visible: true,
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
  nameValidator() {
    let rjx = /^[a-zA-Z]+$/;
    let isValid = rjx.test(this.state.name);
    if (this.state.name == "" && !isValid) {
      this.setState({ nameError: "name should not be empty" });
    } else if (this.state.name.length < 4) {
      this.setState({ nameError: "enter valid name" });
    } else if (!isValid) {
      this.setState({ nameError: "name must be in alphapatic" });
    } else {
      this.setState({ nameError: "" });
    }
  }
  passValidator() {
    const regex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,15})"
    );
    let isValid = regex.test(this.state.password);
    if (this.state.password == "" && !isValid) {
      this.setState({ passwordError: "password should not be empty" });
    } else if (this.state.password.length < 8) {
      this.setState({
        passwordError: "password must be more than 8 character",
      });
    } else if (!isValid) {
      this.setState({
        passwordError:
          "password must be contain uppercase lowecase speacial character",
      });
    } else {
      this.setState({ passwordError: "" });
    }
  }

  passeye = () => {
    this.setState({ show: !this.state.show, visible: !this.state.visible });
  };

  render() {
    return (
      // NAME
      <View style={styles.container}>
        <TextInput
          placeholder="Name"
          onBlur={() => this.nameValidator()}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          style={[styles.input, { marginTop: 50 }]}
        />
        <Text style={styles.text}>{this.state.nameError}</Text>

        {/* PHONE */}
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
        {/* EMAIL */}
        <TextInput
          placeholder="Email"
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
          style={[styles.input]}
        />
        <Text style={styles.text}>{this.state.emailError}</Text>

        {/* PASSWORD */}
        <View>
          <TextInput
            placeholder="Password"
            onBlur={() => this.passValidator()}
            secureTextEntry={this.state.visible}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
            style={[styles.input]}
          />
          <TouchableOpacity style={styles.eye}>
            <MaterialCommunityIcons
              name={
                this.state.show === false ? "eye-outline" : "eye-off-outline"
              }
              size={25}
              onPress={this.passeye}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Add")}
          >
            <Text style={styles.text}>{this.state.passwordError}</Text>
            <Text>Address</Text>
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
    marginLeft: 20,
    backgroundColor: "white",
    padding: 10,
    fontSize: 16,
    marginTop: 15,
  },
  text: {
    color: "red",
    marginLeft: 25,
    fontSize: 15,
  },
  eye: {
    alignItems: "flex-end",
    right: "15%",
    
  },
});

export default RegisterScreen;
