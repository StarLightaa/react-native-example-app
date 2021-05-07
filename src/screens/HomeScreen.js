import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { useDispatch } from 'react-redux';
import { addFood } from '../actions/food';

const HomeScreen = ({ navigation }) => {
    const [food, setFood] = useState('')
    const dispatch = useDispatch();
    const submitFood = (food) => dispatch(addFood(food));

    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
            <Button
                title="Go to Details1"
                onPress={() => navigation.navigate('Details')}
            />
            <TextInput
                value={food}
                placeholder='Name'
                style={styles.foodInput}
                onChangeText={(food) => setFood(food)}
            />
            <TouchableOpacity
                style={{ marginBottom: 16 }}
                onPress={() => {
                submitFood(food)
                setFood('')
                }}>
                <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

HomeScreen.navigationOptions = {
  title: 'Главный экран'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 48,
        marginBottom: 30,
        marginTop: 16,
        color: 'white'
    },
    foodInput: {
      fontSize: 24,
      marginBottom: 32,
      borderWidth: 1,
      padding: 12,
      width: '80%',
      borderRadius: 10,
      backgroundColor: 'white'
    }
});

export default HomeScreen;