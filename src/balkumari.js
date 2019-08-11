import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet,Button,Alert } from "react-native";
import { Form, Input } from "native-base";

class BalkumariBb extends Component {
    constructor() {
 
    super()
 
    this.state = {
 
      BloodGroup: '',
      BloodPint: ''
     
    }
 
  }
  admindata = () =>{
 
    fetch('http://192.168.208.2/Flowers_Site/admindataentry.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
    
        blood_group: this.state.BloodGroup,
    
        blood_pint: this.state.BloodPint,
    
      })
    
    }).then((response) => response.json())
          .then((responseJson) => {
    
    // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
    
          }).catch((error) => {
            console.error(error);
          });
   
  }
  render() {
    return (
      <View style={styles.container}>
           <Text style= {{ marginLeft: 50}}>Data Entry</Text>
        
          <View style={{ flexDirection: "row", fontSize: 20 }}>
           
            <TextInput
              style={{
                borderWidth: 2,
                width: "50%",
                borderRadius: 10,
                marginLeft: 50,
                borderColor: "blue",
                alignItems: "center",
              }}
              placeholder=" Enter the blood_group"
              onChangeText={blood_group => this.setState({BloodGroup: blood_group})}
            />
          </View>
          <View style={{ flexDirection: "row", fontSize: 20, marginTop: 10 }}>
            
            <TextInput
              style={{
                borderWidth: 2,
                width: "50%",
                borderRadius: 10,
                marginLeft: 50,
                borderColor: "blue",
                alignItems: "center",
              }}
              placeholder=" Enter the number of pint of blood"
              onChangeText={blood_pint => this.setState({BloodPint: blood_pint})}
             
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop:100,
              flex: 1
            }}
          >
        
        <Button title="add a blood" onPress={this.admindata} color="red" />
        
          </View>
        
      </View>
    );
  }
}
export default BalkumariBb;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center"
  }
});
/*
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
              onPress={this.admindata}
               <Text style={{ marginLeft: 15 }}>Enter Blood Group: </Text>
               <Text style={{ marginLeft: 15 }}>Enter units: </Text>
              */