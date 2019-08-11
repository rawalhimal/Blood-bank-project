// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import Icon from '@expo/vector-icons/Ionicons';
// export default class Search extends Component {
//     render() {
//       return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Text>Feed</Text>
//         </View>
//       );
//     }
//   }
//   Search.navigationOptions={ 
//     tabBarLabel:'Search',  
//       tabBarIcon: ({ tintColor }) => (  
//           <View>  
//               <Icon style={[{color: tintColor}]} size={25} name={'ios-search'}/>  
//           </View>),  
//            activeColor: '#f60c0d',  
//            inactiveColor: '#f65a22',  
//            barStyle:{backgroundColor:'red'}, 
// }  
   //This is an example code to Add Search Bar Filter on Listview//
import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body,Button } from "native-base";

import Icon from '@expo/vector-icons/Ionicons';
//import { Button } from 'native-base';
//import all the components we are going to use.
 
export default class Search extends Component {
    static navigationOptions={
        header:null
    }
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, text: '' };
    this.arrayholder = [];
  }
 
  componentDidMount() {
    return fetch('http://192.168.208.2/DonorForm/FetchAllData.php')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.blood_group ? item.blood_group.toUpperCase() : ''.toUpperCase();
     
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          padding:1,
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Blood Group"
        />
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
            //   <View>
            //       <Text style={styles.textStyle} onPress={()=>this.props.navigation.navigate('FetchAllData')}>{item.blood_group}</Text>
                
            //   </View>
            <View style={{flex:1, flexDirection: 'column',height:300}} >
        
            <Container>
        
          <Content >
            <Card>
              <CardItem style={{justifyContent:'center'}}>
                  <Body>
                  <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>NAME</Text>
                <Text style={{fontWeight:'bold',textAlign:'center'}}>{item.donor_name}</Text>
                  </Body>
              
              </CardItem>
              <CardItem >
                <Body>
                <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>ADDRESS</Text>
                  <Text style={{fontWeight:'bold',textAlign:'center'}}>
                  {item.donor_address}
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                  <Body>
                  <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>BLOOD GROUP</Text>
                <Text style={{fontWeight:'bold',textAlign:'center'}}>{item.blood_group}</Text>
                  </Body>
              
              </CardItem>
              <CardItem>
                  <Body>
                  <Text style={{fontSize:15,color:'red',fontWeight:'bold',textAlign:'center'}}>Phone Number</Text>
                <Text style={{fontWeight:'bold',textAlign:'center'}}>{item.phone_number}</Text>
                  </Body>
              </CardItem>
              
            </Card>
          </Content>
        </Container>
  
   
         </View>
           
            
          )}
          
          
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
  Search.navigationOptions={ 
    tabBarLabel:'Search',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-search'}/>  
          </View>),  
           activeColor: '#f60c0d',  
           inactiveColor: '#f65a22',  
           barStyle:{backgroundColor:'red'}, 
}  
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
    borderRadius:15,
  },
});
