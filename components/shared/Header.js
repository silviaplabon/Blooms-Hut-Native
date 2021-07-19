import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions } from 'react-navigation';
export default function Header({navigation}) {
    const openMenu=()=>{
       navigation.openDrawer()
    }
    return (
        <View style={styles.header}>
               <Icon name="list" size={50}
                    style={{ color: 'black', paddingLeft: 10 }} onPress={openMenu} />
                <Text style={styles.headerText}>Blooms Hut</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        width: '98%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft:'1%',
        marginRight:'1%',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    }
})