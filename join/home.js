import React, { Component } from 'react';
 
import { StyleSheet, View, TextInput, Button,Platform, Text, Alert,ImageBackground } from 'react-native';
import{Form,Picker,Icon} from 'native-base';
 
 
export default class HomeClassActivity extends React.Component {
  
 
  static navigationOptions = {
 
    tabBarLabel: 'Blood bank ',
    
 
  };

    constructor() {
     
        super()
     
        this.state = {
               fullname:'',
               phone:'',
               noofpint:'',
               address:'',
               bloodgrp: ''
               
          
     
        }
     
      }
      
     
    Adminfunc = () =>{
     
      fetch('http://192.168.208.2/merging/insertdetail.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
    
    
            full_name:this.state.fullname,
            contact:this.state.phone,
            no_of_pint:this.state.noofpint,
            address:this.state.location,
            blood_group:this.state.bloodgrp
        
      
      
        })
      
      }).then((response) => response.json())
            .then((responseJson) => {
     
                  Alert.alert(responseJson)
      
            }).catch((error) => {
              console.error(error);
            });
           
    }
     
      render() {
        return (
              <ImageBackground style={{ flex: 1, width:'100%',height: '100%' }}source={{uri:
             'https://i.pinimg.com/564x/70/e1/06/70e106c541ff4872742f54fe3059dc77.jpg', }} >    
            {/* </ImageBackground><ImageBackground style={{ flex: 1, width:'100%',height: '100%' }}source={{uri:
              'https://ae01.alicdn.com/kf/HTB1UumWcnqWBKNjSZFAq6ynSpXaU/LIFE-MAGIC-BOX-Vinyl-Marble-Wallpapers-Photoshoot-Backgrounds-Collapsible-Camera-Backdrops.jpg', }} >    
      */}
    <View style={styles.MainContainer}>
       <View style={styles.submain}>
            <Text style= {styles.title}>ACCEPTOR DETAILS</Text>
            
            <TextInput
              placeholder="Enter full name"
              onChangeText={full_name => this.setState({fullname : full_name})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              secureTextEntry={false}
              />
    
    <TextInput
              placeholder="Enter contact number"
              onChangeText={contact=> this.setState({phone: contact})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              secureTextEntry={false}
              />
    
    <TextInput
              placeholder="Enter no of pint"
              onChangeText={no_of_pint => this.setState({noofpint : no_of_pint})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              secureTextEntry={false}
              />
    
    <TextInput
              placeholder="Enter address"
              onChangeText={address=> this.setState({location: address})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              secureTextEntry={false}
              />
    
    <Form>
              <Picker selectedValue={this.state.bloodgrp}   
                      onValueChange={(itemValue,itemIndex) => this.setState({bloodgrp : itemValue})}>
                     <Picker.Item label=" Select Blood Group" value=""/>
                     <Picker.Item label="A+" value="A+" />
                     <Picker.Item label="A-" value="A-"/>
                     <Picker.Item label="B+" value="B+"/>
                     <Picker.Item label="B-" value="B-"/>
                     <Picker.Item label="AB+" value="AB+"/>
                     <Picker.Item label="AB-" value="AB-"/>
                     <Picker.Item label="O+" value="O+"/>
                     <Picker.Item label="O-" value="O-"/>
             </Picker>
           </Form>
    
    
              
     
            <Button title="Submit"  onPress={this.Adminfunc} color="#689f38"  />
            <Text></Text>
            <Button title="View detail" onPress={() => this.props.navigation.navigate("viewdetail")} color="#689f38" />
          </View>
      
     
    </View>
  </ImageBackground>
                
        );
      }
    }

const styles = StyleSheet.create({
 
   
   MainContainer :{
 
    justifyContent: 'center',
    flex:1,
    
   //backgroundColor:'#ffe57f',
   
    
  },
  submain:{
      justifyContent: 'center',
     flex:1,
     margin:10,
    
    //backgroundColor:'#ffe57f',
  
   },
   
  TextInputStyleClass: {
    fontSize:20,
   textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#689f38',
    borderRadius: 5 ,
   
    
  },
   
  title:{
    fontWeight:'bold',
    fontSize: 30, 
    color: "rgba(108, 122, 137, 1)", 
    textAlign: 'center', 
    marginBottom: 15,
    
  }
  
   
  });
  
 