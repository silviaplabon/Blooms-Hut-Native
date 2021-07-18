import React from 'react';
import WonderfulArrangementShow from '../WonderfulArrangementShow/WonderfulArrangementShow';
import { FlatList } from 'react-native';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const SubscribeSection = () => {
    const imageData = [
        {
            id:1,
            name:'Subscription Service',
            image: 'https://i.ibb.co/VQd5GLr/footerbefore1.jpg',
            description:'Treat your workplace or home to a touch of regular beauty with our personalized subscription service.' },
        { 
            id:2,
            name:'Seasonal Flowers ' ,
            image: 'https://i.ibb.co/nQYfzS9/foorerbefore2.jpg',
            description:'The power of flowers helps you perfectly express how important your significant other is in your life.'
        },
        { 
            id:3,
            name:'Make Someone Smile',
            image: 'https://i.ibb.co/gTY3vJd/footerbefore3.jpg',
            description:'Camelia Floral Studio has all the best flowers to make someone smile and laugh or cheer someone up!'
        }
    ]
    return (
        <View style={styles.container}>
        <Text style={styles.headerTitle}>Wonderful Gift</Text>
        <Text style={styles.headerSubtitle}>Our Wonderful Arrangements</Text>
        <FlatList style={styles.cardContainer}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                marginTop: 10,
                paddingBottom: 50,
            }}
            keyExtractor={(item) => `${item.id}`}
            data={imageData}
            renderItem={itemData =>
                <WonderfulArrangementShow itemData={itemData.item}></WonderfulArrangementShow>
            }
        >
        </FlatList>
       
    </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: '#fff0e9',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: 50
    },
    cardContainer: {
        flex: 1,
        width: '100%',
        padding: 5,
    },
    headerTitle: {
        fontSize: 17,
        color: 'black',
        fontFamily: "Philosopher-Bold"
    },
    headerSubtitle:{
        fontSize: 13,
        color: 'black',
        fontFamily: "DancingScript-Bold"
    },
    button: {
        marginTop:10,
        borderWidth: 5,
        borderRadius: 15       
     }
})


export default SubscribeSection;
