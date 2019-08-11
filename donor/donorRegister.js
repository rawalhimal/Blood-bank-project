import React, { Component } from 'react';
 
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';
import {Form,Picker} from "native-base";
 
export default class DonorRegister extends Component {
   
 static navigationOptions={
   header:null
 }
constructor() {
 
    super()
 
    this.state = {
 
      Username: "",
      Useraddress: "",
      Useremail: "",
      Bloodgroup: "",
      Mobilenumber: "",
      DateOfBirth: "",
      
 
    }
 
  }

UserRegistrationFunction = () =>{
  const { Username}  = this.state ;
  const {  Useraddress }  = this.state ;
  const { Useremail }  = this.state ;
  const {  Bloodgroup }  = this.state ;
  const {  Mobilenumber}  = this.state ;
  const { DateOfBirth }  = this.state ;
  
  //const {Useremail,Username} = this.state;
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		
		
		if(reg.test(Useremail) === false)
		{
		alert("Email is Not Correct");
		this.setState({email:'Email is Not Correct'})
		return false;
		  }

		else if(Username==""){
		this.setState({donor_name:'Please enter name'})
		}
		else{
  
 
  fetch('http://192.168.208.2/DonorForm/user_registration.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      donor_name: this.state.Username,
  
      donor_address: this.state.Useraddress,
  
      email: this.state.Useremail,
      blood_group: this.state.Bloodgroup,
  
      phone_number: this.state.Mobilenumber,
  
      date_of_birth: this.state. DateOfBirth,
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
if(responseJson === 'User Registered Successfully')
        {
 
        //Then open Profile activity and send user email to profile activity.
  
       this.props.navigation.navigate('DonorHome', {Name: Username ,Address:Useraddress ,Email:Useremail, Blood:Bloodgroup, Mobile:Mobilenumber, Date:DateOfBirth });
       //this.props.navigation.navigate('ok')
 
        }
        else{
 
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
    }
  }  

  validate(text,type){
    alph=/^[a-zA-Z]+$/
    if(type=='username')
    {
      if(alph.test(text))
      {
        console.warn("Donor name is correct")
      }
      else{
        console.warn("Donor Name is Incorrect")
          }
    }
  }
  render() {
    return (
 
      <View style={styles.MainContainer}>
      <Text style={styles.title}>Please add following details</Text>

      <TextInput
        placeholder="Enter Name"
        //onChangeText={name => this.setState({ UserName: name })}
     
        onChangeText={ donor_name => this.setState({ Username: donor_name }) }
        onChangeText={ (text)=>this.validate(text,'username')}
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
      />

      <TextInput
        placeholder="Enter address"
       // onChangeText={address => this.setState({ Useraddres: address })}
       onChangeText={ donor_address => this.setState({ Useraddress: donor_address }) }
     
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
      />

      <TextInput
        placeholder="Enter email"
        //onChangeText={email => this.setState({ Useremail: email })}
        onChangeText={ email => this.setState({ Useremail : email }) }
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
        //secureTextEntry={true}
      />
      
    


      
     
          <Form style={styles.TextInputStyleClass}>
          
          <Picker
       
      selectedValue={this.state.Bloodgroup}
     
      onValueChange={(itemValue,itemIndex) => this.setState({ Bloodgroup: itemValue})}>
     
              <Picker.Item label="enter blood groups" value=""/>
              <Picker.Item label="A+" value="A+" />
              <Picker.Item label="B+" value="B+"/>
              <Picker.Item label="O+" value="O+"/>
              <Picker.Item label="AB+" value="AB+"/>
              <Picker.Item label="A-" value="A-" />
              <Picker.Item label="B-" value="B-"/>
              <Picker.Item label="O-" value="O-"/>
              <Picker.Item label="AB-" value="AB-"/>
          </Picker>
          </Form> 
         


      <TextInput
        placeholder="Enter mobile number"
      //  onChangeText={phone_number =>this.setState({ Mobilenumber: phone_number })}
      onChangeText={ phone_number => this.setState({ Mobilenumber : phone_number}) }
   
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
        // secureTextEntry={true}
      />

      <TextInput
        placeholder="Enter age"
        //onChangeText={ date_of_birth => this.setState({ DateOfBirth:date_of_birth })}
        onChangeText={ date_of_birth => this.setState({ DateOfBirth : date_of_birth }) }
  
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
        //secureTextEntry={true}
      />

      <Button
        title="Click Here To Register"
        onPress={this.UserRegistrationFunction}
        color="blue"
      />
      <Text></Text>
       <Button
        title="verify"

        color="blue"
      /> 
      {/* <Text></Text>
 <Button
        title="ShowAllData"
        onPress={() => this.props.navigation.navigate("DonorHomePage")}
        color="#2196F3"
      /> 
      <Text></Text>
       <Button
        title="SearchData"
        onPress={() => this.props.navigation.navigate("Search")}
        color="#2196F3"
      />  */}

</View>
            
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10
  },

  TextInputStyleClass: {
    textAlign: "center",
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: "#2196F3",
    borderRadius: 5,
    color: "black"
  },

  title: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
    marginBottom: 15
  },
  TouchableOpacityStyle: {
 
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    width: '100%',
    backgroundColor: 'pink'
 
  },
 
  TextStyle:{
    color:'red',
    textAlign:'center',
  },
 
});

 


