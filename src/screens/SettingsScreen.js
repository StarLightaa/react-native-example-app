import React from 'react';
import { Text, View, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

SettingsScreen.navigationOptions = {
    title: 'Настройки'
  };
  

export default SettingsScreen;