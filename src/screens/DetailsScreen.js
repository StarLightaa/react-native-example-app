import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFood } from '../actions/food';

const DetailsScreen = () => {
    const dispatch = useDispatch();
  
    const deleteCurrent = (key) => dispatch(deleteFood(key))
  
    const foods = useSelector(state => state.foodReducer.foodList);
    console.log(foods);

    const renderItem = ({ item }) => (
        <ListItem bottomDivider>
            <Icon 
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
                onPress={() => deleteCurrent(item.key)} />
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    );
  
    return (
        <View>
            <Text>Список еды:</Text>
            <FlatList style={styles.listContainer}
                data={foods}
                keyExtractor={(item, index) => item.key.toString()}
                renderItem={renderItem}
            />
        </View>
    );
}

DetailsScreen.navigationOptions = {
    title: 'Детальная'
};

const styles = StyleSheet.create({
    listContainer: {
      backgroundColor: '#fff',
      padding: 16
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
});

export default DetailsScreen;