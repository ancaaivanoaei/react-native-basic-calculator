import React, {useState} from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';

interface CalculatorContainerProps {
  writtenOperationProps?: string;
}

export default function CalculatorContainer({
  writtenOperationProps,
}: CalculatorContainerProps): React.JSX.Element {
    const handleTextInput = (value: any) => {
      console.log("@@@@@@@@@")
        console.log('value', value)
    }
    
  return (
    <View style={{marginTop: 100, marginLeft: 16}}>
      <Text> This is a calculator! </Text>
      <View
        style={{marginTop: 16}}
        >
        <Text>Enter your operation:</Text>
        <TextInput 
            style={{
            width: 200,
            height: 30,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: 'grey',
            }}
            onChangeText={(value) => handleTextInput(value)}
        />
      </View>
    </View>
  );
}
