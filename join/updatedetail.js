import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet,ImageBackground, ActivityIndicator, ListView,TextInput, Text, View, Alert, Platform, TouchableOpacity,Button} from 'react-native';

 export default class updatedetail extends Component {
  
    constructor(props) {
      
         super(props)
      
         this.state = {

           fullname:'',
           phone:'',
           noofpint:'',
           location:'',
           bloodgrp: '',
    
           
      
         }
      
       }
   
       componentDidMount(){
   
        // Received Student Details Sent From Previous Activity and Set Into State.
        this.setState({ 
        

          fullname: this.props.navigation.state.params.fn,
          phone: this.props.navigation.state.params.ph,
          noofpint: this.props.navigation.state.params.bpno,
          location: this.props.navigation.state.params.loc,
          bloodgrp: this.props.navigation.state.params.bg,
          
          
        })
   
       }
    
      static navigationOptions =
      {
         title: 'updatedetail',
      };
   
      UpdateBloodRecord = () =>{
        
              fetch('http://192.168.208.2/merging/updatedetail.php', {
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
                blood_group:this.state.bloodgrp,
    
        
              })
        
              }).then((response) => response.json())
                  .then((responseJson) => {
        
                    // Showing response message coming from server updating records.
                    Alert.alert(responseJson);
        
                  }).catch((error) => {
                    console.error(error);
                  });
                  this.props.navigation.navigate('Home');
        }
   
   
      DeleteBloodRecord = () =>{
          
            fetch('http://192.168.208.2/merging/deletedetail.php', {
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
                blood_group:this.state.bloodgrp,
    
          
            })
          
            }).then((response) => response.json())
            .then((responseJson) => {
          
              // Showing response message coming from server after inserting records.
              Alert.alert(responseJson);
          
            }).catch((error) => {
               console.error(error);
            });
   
            this.props.navigation.navigate('Home');
   
        }
   
      render() {
   
        return (
          <ImageBackground style={{ flex: 1, width:'100%',height: '100%' }}source={{uri:
            'https://ae01.alicdn.com/kf/HTB1UumWcnqWBKNjSZFAq6ynSpXaU/LIFE-MAGIC-BOX-Vinyl-Marble-Wallpapers-Photoshoot-Backgrounds-Collapsible-Camera-Backdrops.jpg', }} >    
        
        
     <View style={styles.MainContainer}>
     
            <Text style={{fontSize:30 , textAlign: 'center', marginBottom: 7,fontWeight:'bold'}}> Edit Acceptor record </Text>
            <Text style={{fontSize:20,color:'rgba(108, 122, 137, 1)'}}>Full Name</Text>
            <TextInput
              
              placeholder="Full name"
              
              value={this.state.fullname}
     
              onChangeText={ full_name => this.setState({ fullname :full_name }) }
     
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
            />
           <Text style={{fontSize:20,color:'rgba(108, 122, 137, 1)'}}>Contact</Text>
           <TextInput
              
              placeholder="Phone number"
   
              value={this.state.phone}
     
              onChangeText={ contact=> this.setState({ phone :contact}) }
     
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
            />
     
     <Text style={{fontSize:20,color:'rgba(108, 122, 137, 1)'}}>No of pint</Text>
           <TextInput
              
              placeholder="Pint"
   
              value={this.state.noofpint}
     
              onChangeText={ no_of_pint=> this.setState({ noofpint:no_of_pint}) }
     
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
            />
     
     <Text style={{fontSize:20,color:'rgba(108, 122, 137, 1)'}}>Address</Text>
           <TextInput
              
              placeholder="Address"
   
              value={this.state.location}
     
              onChangeText={ address=> this.setState({ location :address}) }
     
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
            />
     
     <Text style={{fontSize:20,color:'rgba(108, 122, 137, 1)'}}>Blood Group</Text>
           <TextInput
              
              placeholder="Blood Group"
   
              value={this.state.bloodgrp}
     
              onChangeText={ blood_group=> this.setState({ bloodgrp :blood_group}) }
     
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
            />
     
           
     
           
           
           <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UpdateBloodRecord} >
     
           <Text style={styles.TextStyle}> UPDATE CURRENT RECORD </Text>
  
           </TouchableOpacity> 


        <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.DeleteBloodRecord} >
     
        <Text style={styles.TextStyle}> DELETE CURRENT RECORD </Text>
     
        </TouchableOpacity> 
      
     
     </View>
     </ImageBackground>
             
        );
      }
   
  }
  const styles = StyleSheet.create({
 
    MainContainer :{
     
    // Setting up View inside content in Vertically center.
    justifyContent: 'center',
    flex:1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    marginLeft:30 
    },
     
    TextInputStyleClass: {
 
        textAlign: 'center',
        width: '90%',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: 'rgb(211, 84, 0)',
        borderRadius: 8 ,
       
        },
    TouchableOpacityStyle: {
 
            paddingTop:10,
            paddingBottom:10,
            borderRadius:5,
            marginBottom:7,
            width: '90%',
            backgroundColor: '#e47833'
         
          },
          TextStyle:{
            color:'#fff',
            textAlign:'center',
          },
     
    });
     