import React, { Component } from 'react';
import {Container,Content,Card,CardItem,Left,Right,Button,Body,Thumbnail,Icon} from "native-base";
import { View, Text, StyleSheet} from 'react-native';
import call from "react-native-phone-call";
//import Icon from '@expo/vector-icons/Ionicons';


class  bloodbank extends Component {
  
  callBalkumari = () => {
    //handler to make a call
    const args = {
      number: "01-5186065",
      prompt: false
    };
    call(args).catch(console.error);
  };
  callPulchok = () => {
    //handler to make a call
    const args = {
      number: "01-5527033",
      prompt: false
    };
    call(args).catch(console.error);
  };
  callBhaktapur = () => {
    //handler to make a call
    const args = {
      number: "01-6612266",
      prompt: false
    };
    call(args).catch(console.error);
  };
  callMaharajgunj = () => {
    //handler to make a call
    const args = {
      number: "01-4412303",
      prompt: false
    };
    call(args).catch(console.error);
  };
  callkavra = () => {
    //handler to make a call
    const args = {
      number: "01-1661431",
      prompt: false
    };
    call(args).catch(console.error);
  };
  callbansbari = () => {
    //handler to make a call
    const args = {
      number: "01-4371374",
      prompt: false
    };
    call(args).catch(console.error);
  };
  callsinamangal = () => {
    //handler to make a call
    const args = {
      number: "01-4110842",
      prompt: false
    };
    call(args).catch(console.error);
  };
  callpokhara = () => {
    //handler to make a call
    const args = {
      number: "01-521091",
      prompt: false
    };
    call(args).catch(console.error);
  };
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
  }
  acceptorLogin = () => {};
  render() {
    return this.state.isLoading === true ? (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    ) : (
      <Container style={{backgroundColor:'#b91400'}}>
        <Content padder>
        <Card style={{backgroundColor:'#ff7043'}} >
            <CardItem style={{backgroundColor:'#ff7043'}}>
            
              <Text style={{ fontWeight: "bold", fontSize: 29,color:'white'}}>
                Blood Banks
              
              </Text>
              
            </CardItem>
            <CardItem header bordered>
              <Body>
              <Text >
                Main Red Cross Blood Bank
              </Text>
              <Text>Balkumari
              </Text>
              </Body>
              <Right>
                <Icon
                  type="Zocial"
                  name="call"
                  onPress={this.callBalkumari}
                  style={{ color: "green" ,fontSize:24}}
                  active
                />
              </Right>
            </CardItem>
            <CardItem header bordered>
              <Body>
              <Text >
              Bhaktapur Blood Bank
              </Text>
              <Text>Bhaktapur
              </Text>
              </Body>
              <Right>
                <Icon
                  type="Zocial"
                  name="call"
                  onPress={this.callBhaktapur}
                  style={{ color: "green" ,fontSize:24}}
                  active
                />
              </Right>
            </CardItem>
            <CardItem header bordered>
              <Body>
              <Text >
             Pulchok Blood Bank
              </Text>
              <Text>Lalitpur
              </Text>
              </Body>
              <Right>
                <Icon
                  type="Zocial"
                  name="call"
                  onPress={this.callPulchok}
                  style={{ color: "green" ,fontSize:24}}
                  active
                />
              </Right>
            </CardItem>
            <CardItem header bordered>
              <Body>
              <Text >
             Teaching Hospital
              </Text>
              <Text>Maharajgunj Rd
              </Text>
              </Body>
              <Right>
                <Icon
                  type="Zocial"
                  name="call"
                  onPress={this.callMaharajgunj}
                  style={{ color: "green" ,fontSize:24}}
                  active
                />
              </Right>
            </CardItem>
            <CardItem header bordered>
              <Body>
              <Text >
             Banepa Blood Bank
              </Text>
              <Text>Kavre
              </Text>
              </Body>
              <Right>
                <Icon
                  type="Zocial"
                  name="call"
                  onPress={this.callkavra}
                  style={{ color: "green" ,fontSize:24}}
                  active
                />
              </Right>
            </CardItem>
            <CardItem header bordered>
              <Body>
              <Text >
              Gangalal Hospital
              </Text>
              <Text>Bansbari Road
              </Text>
              </Body>
              <Right>
                <Icon
                  type="Zocial"
                  name="call"
                  onPress={this.callbansbari}
                  style={{ color: "green" ,fontSize:24}}
                  active
                />
              </Right>
            </CardItem>
            <CardItem header bordered>
              <Body>
              <Text >
              Nobel Hospital
              </Text>
              <Text>Sinamangal, Kathmandu
              </Text>
              </Body>
              <Right>
                <Icon
                  type="Zocial"
                  name="call"
                  onPress={this.callsinamangal}
                  style={{ color: "green" ,fontSize:24}}
                  active
                />
              </Right>
            </CardItem>
            <CardItem header bordered>
              <Body>
              <Text >
              Pokhara blood bank
              </Text>
              <Text>Ram Ghat,Pokhara
              </Text>
              </Body>
              <Right>
                <Icon
                  type="Zocial"
                  name="call"
                  onPress={this.callpokhara}
                  style={{ color: "green" ,fontSize:24}}
                  active
                />
              </Right>
            </CardItem>
           
          </Card>
        </Content>
      </Container>
    );
  }
}
export default bloodbank;

  bloodbank.navigationOptions={ 
    tabBarLabel:'Bbank',  
    tabBarIcon: ({ tintColor }) => (  
        <View>  
            <Icon style={[{color: tintColor}]} size={25} name='people' ></Icon>
        </View>),  
}  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});