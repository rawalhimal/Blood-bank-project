

// import React, { Component } from 'react';
 
// import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert, Platform,ImageBackground, TouchableOpacity,Button} from 'react-native';





// export default class CategoryClassActivity extends React.Component {

  
    
//     static navigationOptions = {
      
      
//           tabBarLabel: 'Donors',
        
          
//         };

//         constructor(props) {
//           super(props);
//           this.state = {
//             isLoading: true
//           }
//         }
         
      
         
//         componentDidMount() {
         
//           return fetch('http://192.168.208.2/merging/viewdonordata.php')
//             .then((response) => response.json())
//             .then((responseJson) => {
//               let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//               this.setState({
//                 isLoading: false,
//                 dataSource: ds.cloneWithRows(responseJson),
//               }, function() {
//                 // In this block you can do something with new state.
//               });
//             })
//             .catch((error) => {
//               console.error(error);
//             });
//         }
         
//         ListViewItemSeparator = () => {
//           return (
            
            
//             <View
//               style={{
         
//                 height: 2,
//                 width: "100%",
//                 backgroundColor: "rgba(103, 128, 159, 1)",
//                 padding:1
         
//               }}
//             />
            
//           );
//         }
         
         
//         render() {
//           if (this.state.isLoading) {
//             return (
//               <View style={{flex: 1, paddingTop: 20}}>
//                 <ActivityIndicator />
//               </View>
//             );
//           }
         
  
//       return( 
//         <View style={styles.MainContainer}>
 
//         <ListView
   
//           dataSource={this.state.dataSource}
   
//           renderSeparator= {this.ListViewItemSeparator}
   
//           renderRow={(rowData) =>
   
//          <View style={{flex:1, flexDirection: 'column'}} >
   
          
//           <Text style={styles.textViewContainer} >{'Donor Name = ' + rowData.donor_name}</Text>
//           <Text style={styles.textViewContainer} >{'Address = ' + rowData.donor_address}</Text>
//           <Text style={styles.textViewContainer} >{'Email = ' + rowData.email}</Text>
//           <Text style={styles.textViewContainer} >{'Blood Group = ' + rowData.blood_group}</Text>
//           <Text style={styles.textViewContainer} >{'Phone number= ' + rowData.phone_number}</Text>
//           <Text style={styles.textViewContainer} >{'Date of birth = ' + rowData.date_of_birth}</Text>

  
         
//         </View>
       
            
//           }
          
//         />
   
//       </View>
    
//     );
//   }
//   }
//   const styles = StyleSheet.create({
   
//   MainContainer :{
   
  
//   justifyContent: 'center',
//   flex:1,
//   paddingTop: (Platform.OS === 'ios') ? 20 : 0,
//   backgroundColor: 'rgba(242, 241, 239, 1)',
//   padding: 5,
   
//   },
   
//    rowViewContainer: {
//      fontSize: 20,
//      paddingRight: 10,
//      paddingTop: 10,
//      paddingBottom: 10,
//      height:50,
//    },
//    textViewContainer: {
   
//     textAlignVertical:'center', 
//      padding:10,
//      fontSize: 20,
//      color: '#rgba(46, 49, 49, 1)',
    
//    }
   
//   });
import * as React from 'react';
import { ImagePicker } from 'expo';
import { Formik } from 'formik';
import {  TextInput } from 'react-native-paper';
import { Alert, Keyboard, Image, View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body,Button } from "native-base";
 
import { ActivityIndicator, ListView, Text, Platform, TouchableOpacity} from 'react-native';
const initialValues = {
  title: '',
  image: ''
}
class FetchAllData extends React.Component {
 
constructor(props) {
  super(props);
  this.state = {
      donorid:true,
    isLoading: true
  }
}
componentDidMount() {

 
  return fetch('http://192.168.208.2/DonorForm/FetchAllData.php')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
       donor_id:false,
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson),
      }, function() {
        // In this block you can do something with new state.
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
 
ListViewItemSeparator = () => {
  return (
    <View
      style={{
 
        height: .5,
        width: "100%",
        backgroundColor: "#000",
 
      }}
    />
  );
}

onSubmit(values) {
  //List of form values
  console.log(values);
  Alert.alert(JSON.stringify(values));
  Keyboard.dismiss();
}

async _pickImage (handleChange) {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4, 3]
  })
  console.log(result)
  if (!result.cancelled) {
    handleChange(result.uri)
  }
}


 
render() {
  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }
 
  return (


 
    <View style={styles.MainContainer}>
      <Text></Text>
       <Button block light onPress={()=>this.props.navigation.navigate('SentInfo')}>
          <Text> Sent Information</Text>
        </Button>
      <ListView
 
        dataSource={this.state.dataSource}
 
        renderSeparator= {this.ListViewItemSeparator}
 
        renderRow={(rowData) =>
 
       <View style={{flex:1, flexDirection: 'column',height:400}} >
        
          <Container>
      
        <Content >
          <Card>
            <CardItem style={{justifyContent:'center'}}>
                <Body>
                <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>Name</Text>
              <Text style={{textAlign:'center'}}>{' ' + rowData.donor_name}</Text>
                </Body>
            
            </CardItem>
            <CardItem >
              <Body>
              <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>Address</Text>
                <Text style={{textAlign:'center'}}>
                {' ' + rowData.donor_address}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>Blood Group</Text>
              <Text style={{textAlign:'center'}}>{'  ' + rowData.blood_group}</Text>
                </Body>
            
            </CardItem>
            <CardItem style={{justifyContent:'center'}}>
                <Body>
                <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>Gmail</Text>
              <Text style={{textAlign:'center'}}>{' ' + rowData.email}</Text>
                </Body>
            
            </CardItem>
            <CardItem >
              <Body>
              <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>Phone Number</Text>
                <Text style={{textAlign:'center'}}>
                {' ' + rowData.phone_number}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>Date Of Birth</Text>
              <Text style={{textAlign:'center'}}>{'  ' + rowData.date_of_birth}</Text>
                </Body>
            
            </CardItem>
          </Card>
        </Content>
      </Container>

 
       </View>
 
        }
      />
 
    </View>
  );
}
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,

backgroundColor: '#00BCD4',
padding: 2,
 
},
 
textViewContainer: {
 
 textAlignVertical:'center', 
 padding:10,
 fontSize: 15,
 color: 'black',
 textAlign:'center',
 
},

 
});
 export default FetchAllData;
//AppRegistry.registerComponent('Project', () => Project);
   
  
              
   



















































































