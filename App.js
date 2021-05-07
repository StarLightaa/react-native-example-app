import 'react-native-gesture-handler';
import React from 'react';
// import { Container, Header, Content, Button } from 'native-base';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { HomeScreen, SettingsScreen, DetailsScreen  } from './src/screens';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      title: 'STAR GATE',
      data: []
    };
  }
  async componentDidMount() {
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Text>Загрузка приложения</Text>;
    }
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Settings" component={SettingsStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
}

{/* <Container>
  <Header />
  <Text>Open up App.js to start working on your app!</Text>
  <Content>
      <Button light><Text> Light </Text></Button>
      <Button primary><Text> Primary </Text></Button>
      <Button success><Text> Success </Text></Button>
      <Button info><Text> Info </Text></Button>
      <Button warning><Text> Warning </Text></Button>
      <Button danger><Text> Danger </Text></Button>
      <Button dark><Text> Dark </Text></Button>
  </Content>
</Container> */}