import React, { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// import { useHistory } from 'react-router-dom';
// import { UserContext } from '../../../App';
import FlowersCollectionShow from '../FlowersCollectionShow/FlowersCollectionShow'

const FlowersCollection = () => {

    // const history = useHistory()
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [flowersData, setFlowersData] = useState([]);
    const [numberOfData, setNumberOfData] = useState(10);
    const [visible, setVisible] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=20263967-046b644b9589617318ad2e8b9&q=flowers&image_type=photo&per_page=${numberOfData}`)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could Not Fetch the data')
                }
                return res.json();
            })
            .then(data => {
                setFlowersData(data.hits);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
            })
    }, [numberOfData])

    const sliceImageOperation = () => {
        if (numberOfData < flowersData.length) {
            const data = numberOfData + 10;
            setNumberOfData(data);
        }
        else {
            setVisible(false);
            setNumberOfData(flowersData);
        }
    }



    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Our Awesome Flowers</Text>
            <Text style={styles.headerSubtitle}>Shop the Collection</Text>
            {
                error && <Text>{error}</Text>
            }
            <FlatList style={styles.cardContainer}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                }}
                numColumns={2}
                keyExtractor={(item) => `${item.id}`}
                data={flowersData}
                renderItem={itemData =>
                    <FlowersCollectionShow flower={itemData.item} id={itemData.item.id}></FlowersCollectionShow>
                }
            >
            </FlatList>
            <Button title="Load More" color="#a03c3a"  buttonStyle={styles.button}  onPress={() => sliceImageOperation()}></Button>
            {
                visible == false && <Text>END of Result</Text>
            }
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
        paddingBottom: 50,
        paddingLeft:'2%',
        paddingRight:'2%'
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

export default FlowersCollection;

