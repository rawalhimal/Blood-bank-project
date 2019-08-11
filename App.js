
import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation";
import register from "./src/register";
import Feed from "./ok/feed";
import Landing from'./main/landing';
import DonorVerification from './donor/donorVerification';
import Search from "./ok/search";
import blood_bank from "./ok/b_bank";
import About from "./ok/About";
import AcceptorRegister from './donor/acceptorRegister';
import AcceptorSearch from './donor/acceptorSearch';
import Admin from './main/admin';
import tab from './join/main';
import  bloodbank from './donor/bloodbank';
import * as firebase from 'firebase';
// var firebaseConfig = {
//   apiKey: "AIzaSyCP0-wFODW2lcdlWrSxoZgDscR1UEdeycg",
//   authDomain: "project-76410.firebaseapp.com",
//   databaseURL: "https://project-76410.firebaseio.com",
//   projectId: "project-76410",
//   storageBucket: "",
//   messagingSenderId: "780211994723",
//   appId: "1:780211994723:web:b9e45790d73ad482"
// };

// firebase.initializeApp(firebaseConfig);

var firebaseConfig = {
  apiKey: "AIzaSyCDePzADW3e7hvPhcC2hwr3mzgGBct0Pgs",
  authDomain: "eblood-43cd7.firebaseapp.com",
  databaseURL: "https://eblood-43cd7.firebaseio.com",
  projectId: "eblood-43cd7",
  storageBucket: "",
  messagingSenderId: "719514705569",
  appId: "1:719514705569:web:82a639f71e2423af"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;
const DashboardTabNavigator = createBottomTabNavigator(
  { 
    
    Feed:Feed,
    Search:Search,
    blood_bank:blood_bank,
   About:About,
  },
  
  {  
            tabBarOptions: {  
                activeTintColor: 'red',  
                  
                style: {  
                    backgroundColor:'white'  
                }  
            },  
        }  
  
);
const DashboardStackNavigator = createStackNavigator(
  {
    
    Landing,
    DonorVerification,
    register:register,
    DashboardTabNavigator: DashboardTabNavigator,
    AcceptorRegister,
    AcceptorSearch,
    Admin,
    tab,
    bloodbank,
    
  },
  
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   }
);
const AppContainer = createAppContainer(DashboardStackNavigator);









