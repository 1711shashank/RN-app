import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
    return <TextInput {...props} style={{...styles.input,...props.style }}/>;

};

const styles =StyleSheet.create({
    input:{
        height: 300,
        color: 'green',
        backgroundColor: 'red',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }

});

export default Input;