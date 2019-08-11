import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text,Dimensions,ImageBackground} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
var height = Dimensions.get("window").height/3.2;
var width = Dimensions.get("window").width;
const myBackground = require("../assets/fact.png");
export default class About extends Component {
  constructor() {
    super();
    //Array of Item to add
    this.items = [
       
      'Accident & Injury– Can donate if otherwise healthy.',
      'Accupunture– Postpone donation for one year.',
      'Aids– Cannot donate.',
      'Allergies– Can donate if mild and require no treatment.',
      'Alcohol– Postpone donation if consumed alcohol in last 12 hours.',
      'Anaemia– Postpone donation.',
      'Arthiritis– Can donate if mild and not on medication.',
      'Asthama– Can donate if mild. Those with severe asthama requiring regular treatment cannot donate.',
      'Blood Pressure– Acceptable range is 160/90 to 110/70. Not to donate if on medication.',
      'Bronchitis– Postpone donation till 4 weeks after recovery.',
      'Cancer– Cannot donate.',
      'Cold and Sore Throat– May not donate for first 24 hours into the condition. Can donate after 24 hours if feeling well enough to donate.',
      'Chicken Pox– Postpone donation till 4 weeks after recovery.',
      'Cholesterol– Can donate if on diet control. Not to donate if under treatment.',
      'Colitis– Cannot donate.',
      'Colostomy– Cannot donate.',
      'Dementia– Cannot donate.',
      'Dental Work– Can donate even if recent case of minor dental work like dental cleaning, fillings and extractions. Postpone donation for 72 hours if undergone oral surgery.',
      'Dengue– Postpone donation till 4 weeks after recovery.',
      'Dermatitis– Can donate if mild. Postpone donation if severe.',
      'Diabetes– Can donate if treating by diet control. Postpone donation if under medication.',
      'Diarrhoea– Postpone donation till 3 weeks after recovery.',
      'Drug Abuse– Cannot donate.',
      'Ear Piercing– Can donate if done by physician or using ear piercing gun with sterile supplies. Else postpone for one year.',
     'Eczema– Can donate if mild. Postpone donation if severe.',
     'Electrolysis– Postpone donation for one year.',
     'Emphysema– Can not donate.',
     'Filariasis– Cannot donate.',
     'Food Poisoning– Postpone donation for one week after recovery.',
     'Gastroenteritis– Postpone donation for one week after recovery.',
     'Gall Stone– Can donate if not on treatment.',
     'Genital Herpes– Postpone donation for 4 weeks after recovery.',
     'Gonorrhoea/Syphillis– Postpone donation for 1 year after recovery.',
     'Gout Cannot donate.',
     'Hepatitis– Can not donate if having history of viral hepatitis after 11 years of age. However can donate if history of hepatitis pertaining to mononucleosis or CMV infection.',
     'Leprosy– Cannot donate.',
     'Malaria– Postpone donation for 3 years after recovery.',
     'Mensuration– Can donate.',
     'Postrate– Cannot donate.',
     'Pregnancy– Can donate after 6 weeks of full term normal delivery. Can donate 6 weeks after termination in third trimester. Those with first or second trimester miscarriage can donate.',
     'Sickle Cell Trait– Cannot donate.',
     'Smoker– Can Donate.',
     'Spondylosis– Can donate if feeling fit and not under treatment.',
     'Stroke– Cannot donate.',
     'Syphilis– Cannot donate.',
     'Tattoo– Postpone donation for one year.',
    'Thyroid– For Hypothyroid can donate if feeling well and euthyroid on thyroxine for six months. For Hyperthyroid cannot donate until euthyroid for six months.',
    'Transfusion– Postpone donation by one year if undergone transfusion with blood products. However can donate if undergone autologous transfusion.',
    'Tuberculosis– Cannot donate till 2 years after complete cure.',
    'Viral Infection– Can donate after cure and off treatment.',
    'Worms– Can donate after cure.',
    

    ];
  }
  render() {
    return (
      <ImageBackground
        source={myBackground}
        style={{ width: "100%", height: "100%" }}
      >
      <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
            marginTop: height
          }}
        >
      <View style={styles.container}>
        <ScrollView>
          {/*Loop of JS which is like foreach loop*/}
          {this.items.map((item, key) => (
            //key is the index of the array 
            //item is the single item of the array
            <View key={key} style={styles.item}>
              <Text style={styles.text}>{key}. {item}</Text>
              <View style={styles.separator} />
            </View>
          ))}
        </ScrollView>
      </View>
      </View>
      </ImageBackground>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    
  },
  separator: {
    height: 1,
    backgroundColor: 'red',
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
});
About.navigationOptions={ 
    tabBarLabel:'About',  
    tabBarIcon: ({ tintColor }) => (  
        <View>  
            <Icon style={[{color: tintColor}]} size={25} name={'ios-appstore'}/>  
        </View>),  
}  