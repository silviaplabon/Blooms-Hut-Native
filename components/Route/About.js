import React from 'react';
import { View,Text,StyleSheet ,Button} from 'react-native';
import { globalStyles } from '../../styles/global';


const About= ({navigation}) => {
    const pressHandler=()=>{
        navigation.push('Review')
    }
    return (
      <View style={globalStyles.container}>
          <Text style={globalStyles.titleText}>ABout Screen</Text>
          <Button title="Go To Review" onPress={pressHandler}></Button>
      </View>
    );
};

export default About;