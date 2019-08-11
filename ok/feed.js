
import React, { Component } from 'react';
 
import { StyleSheet, View, TextInput, Button, Text, Alert,TouchableOpacity,ImageBackground,Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
const myBackground = require("../assets/i.jpg");
export default class Feed extends Component
{
    constructor(props) {
      
        super(props)
        
        this.state = {
            Donorid:"",
           UserName: "",
           Useraddress: "",
           Useremail: "",
           Bloodgroup: "",
           Mobilenumber: "",
           DateOfBirth: "",
         };
     
      }
  // Setting up profile activity title.
   static navigationOptions =
   {
      title: 'Welcome to Home',
    
   };
 
   render()
   {
 
     const {goBack} = this.props.navigation;
 
      return(
        <ImageBackground
                source={myBackground}
                style={{ width: "100%", height: "100%" }}
              >
         <View style = { styles.MainContainer }>
            <Text style = {styles.TextComponentStyl}>NAME</Text>
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Name } </Text> 
          
            <Text style = {styles.TextComponentStyl}>Address</Text>
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Address } </Text>
            <Text style = {styles.TextComponentStyl}>Email</Text>
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Email } </Text>
            <Text style = {styles.TextComponentStyl}>BloodGroup</Text>
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Blood } </Text>
            <Text style = {styles.TextComponentStyl}>mobilenumber</Text>
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Mobile } </Text>
            <Text style = {styles.TextComponentStyl}>Age</Text>
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Date } </Text>
            <Button title="Delete Account" onPress={ () => goBack(null) } />
           
         </View>
         </ImageBackground>
      );
   }
}
  Feed.navigationOptions={ 
    tabBarLabel:'Profile',  
    tabBarIcon: ({ tintColor }) => (  
        <View>  
            <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
        </View>),  
}  
const styles = StyleSheet.create({
 
    MainContainer :{
     
      justifyContent: 'center',
      flex:1,
      margin: 10
    },
   
    TextComponentStyle: {
        fontSize: 15,
       color: "green",
       textAlign: 'center', 
       marginBottom: 15,
       fontWeight:'bold'
      },
      TextComponentStyl: {
        fontSize: 20,
       color: "blue",
       textAlign: 'center', 
       marginBottom: 15,
       fontWeight:'bold'
      },
      TextInputStyleClasss:{
     justifyContent:"center",
      },
      TouchableOpacityStyle:{
        backgroundColor:"red",
      }
     
    });
    