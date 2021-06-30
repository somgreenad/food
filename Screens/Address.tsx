import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class Address extends React.Component<Props> {
  state = {
    name: "",
    nameError: "",
    phone: "",
    phoneError: "",
    alterPhone: "",
    pincode: "",
    pincodeError: "",
    DoorNo: "",
    area: "",
    town: "",
    state: "",
  };
  pincodeValidator() {
    if (this.state.pincode.length != 6) {
      this.setState({
        pincodeError: "pincode must be 6 digit",
      });
    } else {
      this.setState({ pincodeError: "" });
    }
  }

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

        {/* ALTER PHONE */}
        <TextInput
          placeholder="Alternate Phone"
          onBlur={() => this.phoneValidator()}
          keyboardType={"numeric"}
          maxLength={10}
          onChangeText={(text) => {
            this.setState({ alterphone: text });
          }}
          style={[styles.input]}
        />

        {/* PINCODE */}
        <TextInput
          placeholder="Pincode"
          onBlur={() => this.pincodeValidator()}
          keyboardType={"numeric"}
          maxLength={6}
          onChangeText={(text) => {
            this.setState({ pincode: text });
          }}
          style={[styles.input]}
        />
        <Text style={styles.text}>{this.state.pincodeError}</Text>

        {/* DOOR NO */}
        <TextInput
          placeholder="Door No/Apartment No"
          keyboardType={"numeric"}
          onChangeText={(text) => {
            this.setState({ DoorNo: text });
          }}
          style={[styles.input]}
        />
        {/* AREA */}
        <TextInput
          placeholder="Area,Landmark"
          keyboardType={"numeric"}
          onChangeText={(text) => {
            this.setState({ area: text });
          }}
          style={[styles.input]}
        />

        {/* TOWN */}
        <TextInput
          placeholder="Town/City"
          keyboardType={"numeric"}
          onChangeText={(text) => {
            this.setState({ town: text });
          }}
          style={[styles.input]}
        />

        {/* STATE */}
        <TextInput
          placeholder="State"
          keyboardType={"numeric"}
          onChangeText={(text) => {
            this.setState({ state: text });
          }}
          style={[styles.input]}
        />

        <TouchableOpacity onPress={() => this.props.navigation.navigate("Lat")}>
          <Text  style={styles.text}>Lattitude</Text>
        </TouchableOpacity>
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
    marginTop: 10,
  },
  text: {
    color: "red",
    marginLeft: 25,
    fontSize: 15,
  },
});

export default Address;
