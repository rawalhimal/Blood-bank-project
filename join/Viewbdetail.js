import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert, Platform, TouchableOpacity,Button} from 'react-native';


export default class Viewbdetail extends Component {
 
constructor(props) {
  super(props);
  this.state = {
    isLoading: true
  }
}
 
GetItem=(bid,blood_group,blood_pint_no)=>{
 
  this.props.navigation.navigate('updatebdetail', { 
    id:bid,
    bg:blood_group,
    bpno:blood_pint_no,
  });
}
 
 
componentDidMount() {
 
  return fetch('http://192.168.208.2/merging/viewbdetail.php')
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
 
        height: 5,
        width: "100%",
        backgroundColor: "#000",
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
 
        
        <Text style={styles.textViewContainer} >{'Blood Group = ' + rowData.blood_group}</Text>

        <Text style={styles.textViewContainer} >{'Blood Pint no = ' + rowData.blood_pint_no}</Text>
        
      
       <Button title="Update/Delete"  color="#26a69a" onPress={this.GetItem.bind( this, rowData.bid,rowData.blood_group, 
              rowData.blood_pint_no, )} /> 
      
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
  paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  backgroundColor: '#dce775',
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
    color: '#26a69a',
    
   }
   
  });
