import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../Utils/Colors';
import { Fonts } from '../../../Components/fonts';

const IncrementDecrement = () => {
    const [counter, setCounter] = useState(1);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    };

    return (
        <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }}>

            <TouchableOpacity style={[styles.button, { backgroundColor: Colors.Ligt_black }]} onPress={decrementCounter}>
                <Text style={styles.buttontext}>-</Text>
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: 10, fontSize: 16, fontFamily: Fonts.bold }}>{counter}</Text>
            <TouchableOpacity style={styles.button} onPress={incrementCounter}>
                <Text style={styles.buttontext}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.Pink,
        borderRadius: 17,
        height: 34,
        width: 34,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttontext: {
        color: Colors.white,
        fontSize: 20
    }
});

export default IncrementDecrement;
