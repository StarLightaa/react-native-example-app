import React from 'react';
import { Text, View, Button } from 'react-native';

export default class SettingsScreen extends React.Component {
    static navigationOptions = { title: 'Settings' };

    render() {
        const { navigation } = this.props;
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
}