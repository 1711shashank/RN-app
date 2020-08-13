import React, {useState} from 'react';
import { View, Text, StyleSheet,TextInput,Button,TouchableWithoutFeedback,Keyboard, Alert} from 'react-native';

import Colors from '../constants/color';
import Input from '../components/Input';

const StartGame =props =>{

    const [enterdValue, setEnterdValue]=useState('');
    const [Confirmrd, setConfirmed] =useState(false);
    const [selectedNumber,setselectedNumber]=useState();

    const numberInputHandler = InputText => {
        setEnterdValue(InputText.replace(/[^0-9]/g),'');
    };

    const resetInputHandler =()=>{
        setEnterdValue('');
        setConfirmed(false);
    };

    const ConfirmInputHandler =()=>{
        const chosenNumber = parseInt(enterdValue);
        if(chosenNumber===NaN || chosenNumber<=0 || chosenNumber>99){
            Alert.alert('Invalid Number')
            return;
        }
        setConfirmed(true);
        selectedNumber(chosenNumber);
        setEnterdValue('');        
    };
   

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>


        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="number-pad" maxLength={2}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonContainer}>                    
                    <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent} /></View>
                    <View style={styles.button}><Button title="Confirm" onPress={ConfirmInputHandler} color={Colors.primary} /></View>
                </View>
            </View>
            
        </View>
        </TouchableWithoutFeedback>
    );
};


const styles =StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
      },
      input:{
          width: 50,
          textAlign: 'center',
          borderBottomColor: 'grey',
          borderBottomWidth: 2,
          marginVertical: 10
      },
      title:{
          fontSize:20,
          marginVertical: 10

      },
      inputContainer:{
          width: 300,
          maxWidth: '80%',
          alignItems: 'center',
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 2},
          shadowRadius: 6,
          shadowOpacity: 0.26,
          backgroundColor: 'white',
          elevation: 5,
          padding: 20,
          borderRadius: 15
      },
      button:{
          width:100
      },
      buttonContainer:{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          paddingHorizontal: 15
      }
});


export default StartGame;