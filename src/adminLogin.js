import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Form, Item, Label, Input, Button } from "native-base";
//const bck = require("../assets/logo1.png");

class Admin extends Component {
  state = {
    uname: [],
    pw: []
  };
  verify = () => {
    if (this.state.uname === "balkumari bb" && this.state.pw === "12345")
      this.props.navigation.navigate("BalkumariBb");
    else if (this.state.uname === "NRS bb" && this.state.pw === "67890")
      this.props.navigation.navigate("NRSBb");
    else alert("invalid!!!");
  };
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center", marginTop: 60 }}>
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>Admin Login</Text>
        </View>
        <View style={styles.inputStyle}>
          <Form>
            <Item floatingLabel>
              <Label style={{ color: "black" }}>Username</Label>
              <Input
                autoCorrect={false}
                onChangeText={uname => this.setState({ uname })}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{ color: "black" }}>Password</Label>
              <Input
                autoCorrect={false}
                secureTextEntry
                onChangeText={pw => this.setState({ pw })}
              />
            </Item>
            <Button
              style={{ marginTop: 20 }}
              block
              rounded
              onPress={this.verify}
            >
              <Text>LogIn</Text>
            </Button>
          </Form>
        </View>
      </View>
    );
  }
}
export default Admin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(149, 165, 166)"
  },
  main: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "white",
    width: "100%",
    height: 350
  },
  inputStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 10
  }
});