import React from 'react';
import { AppRegistry, StyleSheet, Text, Platform,View} from 'react-native';
 
import { TabNavigator,createAppContainer,createMaterialTopTabNavigator,createStackNavigator } from "react-navigation";
import CategoryClassActivity from "./category";
import SubjectClassActivity from "./subject";
import  HomeClassActivity from "./home";
//import EventClassActivity from "./event";
import Viewbdetail from  "./Viewbdetail";
import updatebdetail from "./updatebdetail";
import Viewdetail from "./Viewdetail";
import updatedetail from "./updatedetail";
import SentInfo from "./sentInfo";

export default class tab extends React.Component {
    static navigationOptions = {
        title:'Admin',
      }

    render() {
      return (
        <View style={{ flex: 1 }}>
          <TabContainer />

        </View>
      );
    }
  }
 
    const Mainproject = createMaterialTopTabNavigator({
      
        Home:HomeClassActivity,
        Subject:SubjectClassActivity,
        Category:CategoryClassActivity,
       
       // Event:EventClassActivity,
       
      },
      
      {
        
        tabBarOptions: {
          activeTintColor: '#fff',
          
          
 
          labelStyle: {
            fontSize: 14,
          },
          style: {
            backgroundColor: '#009688',
            
          },
        }
        
      });
      const stackNavigator = createStackNavigator({
  
        Mainproject:Mainproject,
        viewbdetail:Viewbdetail,
        updatebdetail:updatebdetail,
        viewdetail:Viewdetail,
        updatedetail:updatedetail,
        SentInfo:SentInfo,

       
     
     
        });
        const TabContainer = createAppContainer(stackNavigator);

//const TabContainer = createAppContainer(Mainproject);


