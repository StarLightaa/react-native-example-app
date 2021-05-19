import React from 'react';
// import { Container, Header, Content, Button } from 'native-base';
import { SafeAreaView } from 'react-native';
import AppContainer from './src/navigation/Navigator';

import {LocalizationProvider} from './src/services/localization/LocalizationContext';

const App = () => {
  return (
    <LocalizationProvider>
      <SafeAreaView style={{flex: 1}}>
        <AppContainer />
      </SafeAreaView>
    </LocalizationProvider>
  );
};

export default App;

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