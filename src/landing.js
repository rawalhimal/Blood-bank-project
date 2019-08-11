import React from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Icon, List, Button } from "native-base";


class Landing extends React.Component {
  state = {};
  static navigationOptions = {
    header: null
  };
  render() {
    return (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
            
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
                style={{
                  width: "100%",
                  height: 50,
                  backgroundColor: "#e65100",
                  borderRadius: 20
                }}
                onPress={() => this.props.navigation.navigate("First")}
              >
                <Icon
                  type="Entypo"
                  name="add-user"
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
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 320,
                  height: 50,
                  marginLeft: 10,
                  backgroundColor: "#4caf50",
                  borderRadius: 20
                }}
                onPress={() => this.props.navigation.navigate("Donor")}
              >
                <Icon
                  name="ios-search"
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
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: 50,
                  borderRadius: 20
                }}
                onPress={() => this.props.navigation.navigate("Admin")}
              >
                <Icon
                  type="FontAwesome"
                  name="user"
                  style={{ fontSize: 30, color: "black" }}
                >
                  <Text> </Text>
                  <Text style={{ fontSize: 30, color: "#e3f2fd" }}>
                    Admin Login
                  </Text>
                </Icon>
              </Button>
            </View>
          </View>
        </View>
    );
}
}
      

export default Landing;