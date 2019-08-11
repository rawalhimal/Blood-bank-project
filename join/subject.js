import React, { Component } from 'react';
 
import { StyleSheet, View, TextInput, Button, Text, Alert,ImageBackground } from 'react-native';
import{Form,Picker,Icon} from 'native-base';
 
export default class SubjectClassActivity extends React.Component {
 
    

      static navigationOptions = {
      
          tabBarLabel: 'Inventory',
          
    };
          
          constructor() {
 
            super()
         
            this.state = {
                   bloodgrp: '',
                   bloodp: ''
              
         
            }
         
          }
          
         
        Adminfunc = () =>{
         
          fetch('http://192.168.208.2/merging/addblood.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            
          
                blood_group: this.state.bloodgrp,
          
                blood_pint_no: this.state.bloodp
          
            
          
            })
          
          }).then((response) => response.json())
                .then((responseJson) => {
         
                      Alert.alert(responseJson)
          
                }).catch((error) => {
                  console.error(error);
                });
               // this.props.navigation.navigate('viewbdetail');
        }
         
          render() {
            return (
                // <ImageBackground style={{ flex: 1, width:'100%',height: '100%' }}source={{uri:
                //    'https://media.gettyimages.com/vectors/blood-donation-royalty-free-vector-icon-set-vector-id136620561?s=612x612', }} >    
         
        <View style={styles.MainContainer}>
           <View style={styles.submain}>
                <Text style= {styles.title}>BLOOD RECORD</Text>
          
               
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
                
                <TextInput
                  placeholder="Enter blood pint"
                  onChangeText={blood_pint_no => this.setState({bloodp : blood_pint_no})}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  secureTextEntry={false}
                  
                  />
         
               
        <Button title="Submit"  onPress={this.Adminfunc} color="#689f38"  />
        <Text></Text>
        <Button title="View detail" onPress={() => this.props.navigation.navigate("viewbdetail")} color="#689f38" />
      </View>
  
 
</View>
            
    );
  }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
  justifyContent: 'center',
  flex:1,
  
  backgroundColor:'#ffe57f',
},
submain:{
    justifyContent: 'center',
  flex:1,
  margin:10,
  
  backgroundColor:'#ffe57f',

},
 
TextInputStyleClass: {
  fontSize:20,
 textAlign: 'center',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  borderColor: '#2196F3',
  borderRadius: 5 ,
 
},
 
title:{
  fontWeight:'bold',
  fontSize: 30, 
  color: "#009688", 
  textAlign: 'center', 
  marginBottom: 15
}

 
});
   
     