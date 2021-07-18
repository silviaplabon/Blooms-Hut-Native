import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';

const Card = (props) => {
    return (
   
        <View style={styles.card}>{props.children}</View>

    );
};
const styles = StyleSheet.create({
    card: {
        width: '90%',
        alignItems:'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.20,
        elevation: 8,
        backgroundColor:'white',
        borderRadius:10,
        margin:12,
    }
})

export default Card;