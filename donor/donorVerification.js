import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Container, Item, Label, Input, Button, Form } from "native-base";
import * as firebase from "firebase";
const background = require("../assets/img.png");

class DonorVerification extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  signUp = async (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("password too short");
        return;
      }
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      var user = firebase.auth().currentUser;
      user.sendEmailVerification().then(console.log("emailsent"));
      alert(
        `Verification mail has been sent to ${
          user.email
        }. Please verify and click verify`
      );
    } catch (error) {
      console.log(error.toString());
    }
    //this.props.navigation.navigate("Home");
  };
  logIn = async (email, password) => {
    try {
        var self = this;
      await firebase.auth().signInWithEmailAndPassword(email, password);

      firebase.auth().onAuthStateChanged(function(user) {
        if (user.emailVerified) {
           self.props.navigation.navigate("register")
        } else {
          alert("not verified");
        }
      });
    } catch (error) {
      console.log(error.toString());
    }
  };
  render() {
    return (
      <ImageBackground
        source={background}
        style={{ height: "100%", width: "100%" }}
      >
       
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Form>
            <Item floatingLabel>
              <Label style={{ color: "white" }}>Email</Label>
              <Input
                autoCapitalize='none'
                onChangeText={email => this.setState({ email })}
                style={{ color: "#rgba(241, 231, 254, 1)" }}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{ color: "white" }}>Password</Label>
              <Input
                autoCapitalize='none'
                secureTextEntry
                onChangeText={password => this.setState({ password })}
                style={{ color: "#rgba(241, 231, 254, 1)" }}
              />
            </Item>
            <Button
              full
              rounded
              warning
              style={{ marginTop: 15 }}
              onPress={() => this.signUp(this.state.email, this.state.password)}
            >
              <Text>Register</Text>
            </Button>
            <Button
              full
              rounded
              success
              style={{ marginTop: 15 }}
              onPress={() => this.logIn(this.state.email, this.state.password)}
            >
              <Text>Verify</Text>
            </Button>
          </Form>
        </View>
      </ImageBackground>
    );
  }
}
export default DonorVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center"
  }
});
