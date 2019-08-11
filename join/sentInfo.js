import React, { Component } from "react";
import { StyleSheet, View, TextInput,  Text, Alert,TouchableOpacity,Platform } from "react-native";
import { Button } from "native-base";

export default class SentInfo extends Component {
    static navigationOptions = {
      
        tabBarLabel: 'Sent Information',
        
  };
  constructor() {
    super();

    this.state = {
      InfoNotice: "",
      
    };
  }
  
 
UserRegistrationFunction=()=> {
  
  fetch('http://192.168.208.2/merging/insertinfo.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      information_info: this.state.InfoNotice,
      
     
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
       
        Alert.alert(responseJson);
      
  // Showing response message coming from server after inserting records.
        
  
        }).catch((error) => {
          console.error(error);
        });
        
 
}




  render() {
    return (
        <View>
      
        <View style={styles.MainContainer}>
        
         <TextInput
            style={styles.TextInputStyleClass}
            underlineColorAndroid="transparent"
            placeholder={"Write a information"}
            placeholderTextColor={"#9E9E9E"}
            numberOfLines={10}
            multiline={true}
            onChangeText={ information_info => this.setState({InfoNotice: information_info }) }
          />
 
        </View>
     
       
     
              <Button
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: 45,
                  marginLeft: 10,
                  backgroundColor: "pink",
                  borderRadius: 20,
                  marginTop:"25%"
                }}
                onPress={this.UserRegistrationFunction}
              >
               
                  <Text> </Text>
                  <Text style={{ fontSize: 30, color: "black" }}>
                    Sent Information
                  </Text>
               
              </Button>
            </View>
       
    );
  }
}
    
      
  
   

const styles = StyleSheet.create({
    MainContainer :{
 
        flex:1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        justifyContent: 'center',
        margin:20,
        marginTop:'50%',
          
        },
       
        TextInputStyleClass:{
       
          textAlign: 'center',
          height: 50,
          borderWidth: 2,
          borderColor: '#9E9E9E',
          borderRadius: 20 ,
          backgroundColor : "#FFFFFF",
          height: 150
           
          },
 

  
 
  
 
  TextStyle:{
    color:'red',
    textAlign:'center',
  },
 
});