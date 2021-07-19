import React from 'react';
import { View,Text,Button } from 'react-native';
import { globalStyles } from '../../styles/global';

const FlowersOrder = () => {
    const pressHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
          <Text style={globalStyles.titleText}>Review Screen</Text>
          <Button title="Go To Review" onPress={pressHandler}></Button>
      </View>
    );
};

export default FlowersOrder;