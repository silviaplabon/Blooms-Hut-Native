import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDownload, faHeart, faComment } from '@fortawesome/free-solid-svg-icons'
// import './FlowersCollectionShow.css'
// import { AnimationWrapper } from 'react-hover-animation'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from '../Card'

const FlowersCollectionShow = (props) => {
    const { previewURL, tags, views, likes, downloads, comments } = props.flower;
    const state = props.state;
    let newTags = tags?.replace(/,/g, '');
    newTags = newTags.charAt(0).toUpperCase() + newTags.slice(1)

    return (
     
        //                 {
        //                     state == false &&
        //                     <div className="d-flex justify-content-between align-items-center mx-2">
        //                         <h6><FontAwesomeIcon icon={faHeart} className="HeartIcon me-1"></FontAwesomeIcon >{likes}</h6>
        //                         <h6><FontAwesomeIcon icon={faDownload} className="downloadIcon me-1"></FontAwesomeIcon>{downloads}</h6>
        //                         <h6><FontAwesomeIcon icon={faComment} className="commentsIcon me-1"></FontAwesomeIcon>{comments}</h6>
        //                     </div>
        //                 }
   
        <View style={styles.screen}>
            <Card style={styles.flowerContainer}>
                <Image
                    source={{ uri: `${previewURL}` }}
                    resizeMode="cover"
                    style={styles.cardImage}
                />
                <View style={styles.flowerNameContainer}>
                    <Text style={styles.flowerName}>{newTags}</Text>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    flowerContainer: {
        flex: 1,
        height: '100%',
    },
    cardImage: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9
    },
    flowerName: {
        color: 'white',
        textAlign: 'center',
        fontFamily: "Dosis-Regular"

    },
    flowerNameContainer: {
        backgroundColor: 'rgba(0,0,0,0.80)',
        height: 40,
        width: '100%',
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 9,
    }
})
export default FlowersCollectionShow;