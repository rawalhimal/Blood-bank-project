import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert, Platform,ImageBackground, TouchableOpacity,Button} from 'react-native';



export default class Viewdetail extends Component {
 
constructor(props) {
  super(props);
  this.state = {
    isLoading: true
  }
}
 
GetItem=(full_name,contact,no_of_pint,address,blood_group)=>{
 
  this.props.navigation.navigate('updatedetail', { 
    fn:full_name,
    ph:contact,
    bpno:no_of_pint,
    loc:address,
    bg:blood_group,
  });
}
 
 
componentDidMount() {
 
  return fetch('http://192.168.208.2/merging/viewdetail.php')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
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
 
        height: 2,
        width: "100%",
        backgroundColor: "rgba(103, 128, 159, 1)",
        padding:1
 
      }}
    />
    
  );
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
 
      <ListView
 
        dataSource={this.state.dataSource}
 
        renderSeparator= {this.ListViewItemSeparator}
 
        renderRow={(rowData) =>
 
       <View style={{flex:1, flexDirection: 'column'}} >
 
        
        <Text style={styles.textViewContainer} >{'Fullname = ' + rowData.full_name}</Text>
        <Text style={styles.textViewContainer} >{'Contact = ' + rowData.contact}</Text>
        <Text style={styles.textViewContainer} >{'Number of pint = ' + rowData.no_of_pint}</Text>
        <Text style={styles.textViewContainer} >{'Address = ' + rowData.address}</Text>
        <Text style={styles.textViewContainer} >{'Blood Group = ' + rowData.blood_group}</Text>

       <Button title="Update/Delete"  color="rgb(25, 181, 254)" onPress={this.GetItem.bind( this, rowData.full_name, rowData.contact, rowData.no_of_pint,rowData.address, rowData.blood_group)} /> 
      
      </View>
     
          
        }
        
      />
 
    </View>
  
  );
}
}
const styles = StyleSheet.create({
 
MainContainer :{
 

justifyContent: 'center',
flex:1,
paddingTop: (Platform.OS === 'ios') ? 20 : 0,
backgroundColor: 'rgba(242, 241, 239, 1)',
padding: 5,
 
},
 
 rowViewContainer: {
   fontSize: 20,
   paddingRight: 10,
   paddingTop: 10,
   paddingBottom: 10,
   height:50,
 },
 textViewContainer: {
 
  textAlignVertical:'center', 
   padding:10,
   fontSize: 20,
   color: '#rgba(46, 49, 49, 1)',
  
 }
 
});
 