import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Form, Input, Button } from "native-base";

class NRSBb extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Form>
          <View style={{ flexDirection: "row", fontSize: 20 }}>
            <Text style={{ marginLeft: 15 }}>Enter Blood Group: </Text>
            <TextInput
              style={{
                borderWidth: 2,
                width: "50%",
                borderRadius: 10,
                marginLeft: 10,
                borderColor: "blue"
              }}
              placeholder="  Eg: A+"
            />
          </View>
          <View style={{ flexDirection: "row", fontSize: 20, marginTop: 10 }}>
            <Text style={{ marginLeft: 15 }}>Enter units: </Text>
            <TextInput
              style={{
                borderWidth: 2,
                width: "50%",
                borderRadius: 10,
                marginLeft: 50,
                borderColor: "blue"
              }}
              placeholder="  Eg: 10"
            />
          </View>
          <View
            style={{
              marginTop: 25,
              alignItems: "center",
              justifyContent: "center",
              flex: 1
            }}
          >
            <Button
              rounded
              style={{
                width: 75,
                marginTop: 30,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "40%",
                backgroundColor: "rgba(207, 0, 15, 1)"
              }}
            >
              <Text>Add</Text>
            </Button>
          </View>
        </Form>
      </View>
    );
  }
}
export default NRSBb;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center"
  }
});