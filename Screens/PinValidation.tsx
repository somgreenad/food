import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class PinValidation extends React.Component<Props> {
  constructor(props: any) {
    super(props);
    this.state = {
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
    };
  }
  componentDidMount = () => {
    this.refs.pin1ref.focus();
  };

  render() {
    const { pin1, pin2, pin3, pin4 } = this.state;
    return (
      <View style={styles.container}>
        <View style={[styles.s]}>
          <TextInput
            style={styles.c}
            ref={"pin1ref"}
            maxLength={1}
            keyboardType={"numeric"}
            onChangeText={(pin1) => {
              this.setState({ pin1: pin1 });
              if (pin1 !== "") {
                this.refs.pin2ref.focus();
              }
            }}
            value={pin1}
          />
        </View>
        <View style={[styles.s]}>
          <TextInput
            style={styles.c}
            ref={"pin2ref"}
            maxLength={1}
            keyboardType={"numeric"}
            onChangeText={(pin2) => {
              this.setState({ pin2: pin2 });
              if (pin2 !== "") {
                this.refs.pin3ref.focus();
              }
            }}
            value={pin2}
          />
        </View>
        <View style={styles.s}>
          <TextInput
            style={styles.c}
            ref={"pin3ref"}
            maxLength={1}
            keyboardType={"numeric"}
            onChangeText={(pin3) => {
              this.setState({ pin3: pin3 });
              if (pin3 !== "") {
                this.refs.pin4ref.focus();
              }
            }}
            value={pin3}
          />
        </View>
        <View style={styles.s}>
          <TextInput
            style={styles.c}
            ref={"pin4ref"}
            maxLength={1}
            keyboardType={"numeric"}
            onChangeText={(pin4) => this.setState({ pin4: pin4 })}
            value={pin4}
          />
        </View>
         {/* <View style={{ flex:1 }}>
          <TouchableOpacity style={[styles.submit]}>
            <Text style={styles.submitText}>Re-send the OTP</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf2d4",
    flexDirection: "row",
  },
  s: {
    flex: 0.6,
    justifyContent: "space-evenly",
    fontWeight: "400",
  },
  c: {
    backgroundColor: "#f5f4f2",
    fontWeight: "600",
    alignSelf: "center",
    padding: 10,
    fontSize: 20,
    height: 55,
    width: "50%",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#939597",
    textAlign: "center",
  },
  submit: {
    marginRight: 40,
    marginLeft: "60%",
    marginTop: 10,
    width: 100,
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
});

export default PinValidation;
