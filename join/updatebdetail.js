import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet,ImageBackground, ActivityIndicator, ListView,TextInput, Text, View, Alert, Platform, TouchableOpacity,Button} from 'react-native';

 export default class updatebdetail extends Component {
  
    constructor(props) {
      
         super(props)
      
         this.state = {
           bloodid:'',
           bloodgrp: '',
           bloodp: '',
           
      
         }
      
       }
   
       componentDidMount(){
   
        // Received Student Details Sent From Previous Activity and Set Into State.
        this.setState({ 
        
          bloodgrp: this.props.navigation.state.params.bg,
          bloodp: this.props.navigation.state.params.bpno,
          bloodid: this.props.navigation.state.params.id,
          
          
        })
   
       }
    
      static navigationOptions =
      {
         title: 'updatebdetail',
      };
   
      UpdateBloodRecord = () =>{
        
              fetch('http://192.168.208.2/merging/updatebdetail.php', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
             
                bid:this.state.bloodid,
                blood_group:this.state.bloodgrp,
                blood_pint_no:this.state.bloodp,
        
        
              })
        
              }).then((response) => response.json())
                  .then((responseJson) => {
        
                    // Showing response message coming from server updating records.
                    Alert.alert(responseJson);
        
                  }).catch((error) => {
                    console.error(error);
                  });
                  this.props.navigation.navigate('Subject');
        }
   
   
      DeleteBloodRecord = () =>{
          
            fetch('http://192.168.208.2/merging/deletebdetail.php', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
          
              
             // blood_group:this.state.bloodgrp,
             bid : this.state.bloodid,
          
            })
          
            }).then((response) => response.json())
            .then((responseJson) => {
          
              // Showing response message coming from server after inserting records.
              Alert.alert(responseJson);
          
            }).catch((error) => {
               console.error(error);
            });
   
            this.props.navigation.navigate('Subject');
   
        }
   
      render() {
   
        return (
          <ImageBackground style={{ flex: 1, width:'100%',height: '100%' }}source={{uri:
          'https://aboutreact.com/wp-content/uploads/2018/08/8f17765c523f5b75f3dc60ae145e9df7.jpg', }} >    
        
        
     <View style={styles.MainContainer}>
     
            <Text style={{fontSize:30 , textAlign: 'center', marginBottom: 7,fontWeight:'bold'}}> Edit Blood records </Text>
            <Text style={{fontSize:20,color:'red'}}>Blood Group:</Text>
            <TextInput
              
              placeholder="Blood group"
              
              value={this.state.bloodgrp}
     
              onChangeText={ blood_group => this.setState({bloodgrp:blood_group }) }
     
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
            />
           <Text style={{fontSize:20,color:'red'}}>Blood Pint no:</Text>
           <TextInput
              
              placeholder="Blood pint"
   
              value={this.state.bloodp}
     
              onChangeText={ blood_pint_no => this.setState({ bloodp :blood_pint_no }) }
     
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
    
    
    marginLeft:10 
    },
     
    TextInputStyleClass: {
 
        textAlign: 'center',
        width: '90%',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: 'pink',
        borderRadius: 5 ,
       
        },
    TouchableOpacityStyle: {
 
            paddingTop:10,
            paddingBottom:10,
            borderRadius:5,
            marginBottom:7,
            width: '90%',
            backgroundColor: 'pink'
         
          },
          TextStyle:{
            color:'#fff',
            textAlign:'center',
          },
     
    });
     