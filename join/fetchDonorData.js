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
 
// GetItem (donor_name) {
//  <Text>call:</Text>
// Alert.alert(donor_name);
 
// }

 
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
       
      
   
      <ListView
 
        dataSource={this.state.dataSource}
 
        renderSeparator= {this.ListViewItemSeparator}
 
        renderRow={(rowData) =>
 
       <View style={{flex:1, flexDirection: 'column',height:250}} >
        
          <Container>
      
        <Content >
          <Card>
            <CardItem style={{justifyContent:'center'}}>
                <Body>
                <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>NAME</Text>
              <Text style={{fontWeight:'bold',textAlign:'center'}}>{' ' + rowData.donor_name}</Text>
                </Body>
            
            </CardItem>
            <CardItem >
              <Body>
              <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>ADDRESS</Text>
                <Text style={{fontWeight:'bold',textAlign:'center'}}>
                {' ' + rowData.donor_address}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
                <Body>
                <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>BLOOD GROUP</Text>
              <Text style={{fontWeight:'bold',textAlign:'center'}}>{'  ' + rowData.blood_group}</Text>
                </Body>
            
            </CardItem>
            <Button block success>
            <Text>View</Text>
          </Button>
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