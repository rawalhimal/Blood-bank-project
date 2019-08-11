import React from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Icon, List, Button } from "native-base";
var height = Dimensions.get("window").height / 2;
var width = Dimensions.get("window").width;
const myBackground = require("../assets/logo1.png");
class Landing extends React.Component {
  state = {};
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <ImageBackground
        source={myBackground}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
            marginTop: height
          }}
        >
          <View style={{ height: "100%", backgroundColor: "#d50000" }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 20,
                marginTop: 50
              }}
            >
              <Button
              full
                style={{
                  
                  backgroundColor: "#e65100",
                  borderRadius: 20
                }}
                onPress={() => this.props.navigation.navigate("DonorVerification")}
              >
                <Icon
                  type='Entypo'
                  name='add-user'
                  style={{ fontSize: 30, color: "black" }}
                >
                  <Text> </Text>
                  <Text style={{ fontSize: 30, color: "#e3f2fd" }}>
                    Register Donor
                  </Text>
                </Icon>
              </Button>
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 10
              }}
            >
              <Button
              full
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                //   width: 320,
                //   height: 50,
                  marginLeft: 10,
                  backgroundColor: "#4caf50",
                  borderRadius: 20
                }}
                onPress={() => this.props.navigation.navigate("AcceptorRegister")}
              >
                <Icon
                  name='ios-search'
                  style={{ fontSize: 30, color: "black" }}
                >
                  <Text> </Text>
                  <Text style={{ fontSize: 30, color: "#e3f2fd" }}>
                    Search Donor
                  </Text>
                </Icon>
              </Button>
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 20
              }}
            >
              <Button
              full
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                //   width: "100%",
                //   height: 50,
                  borderRadius: 20
                }}
                onPress={() => this.props.navigation.navigate("Admin")}
              >
                <Icon
                  type='FontAwesome'
                  name='user'
                  style={{ fontSize: 30, color: "black" }}
                >
                  <Text> </Text>
                  <Text style={{ fontSize: 30, color: "#e3f2fd" }}>
                    Sign In
                  </Text>
                </Icon>
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Landing;
