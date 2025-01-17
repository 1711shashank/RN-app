import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

import Colors from '../constants/color'

const Header =props => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}> {props.title} </Text>  
        </View>
    );

};

const styles =StyleSheet.create({
    header:{
        height: 90,
        width: '100%',
        paddingTop: 35,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'        
    },

    headerTitle:{
        color: 'black',
        fontSize: 28        
    }
});

export default Header;