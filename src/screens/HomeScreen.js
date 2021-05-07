import React from 'react';
import { Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = { title: 'Home' };

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home screen</Text>
                <Button
                    title="Go to Details1"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        );
    }
}