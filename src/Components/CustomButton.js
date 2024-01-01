import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../Utils/Colors'
import { Fonts } from './fonts'
import Feather from 'react-native-vector-icons/Feather'

const CustomButton = ({
    title,
    onPress,
    type = "PRIMARY",
    containerStyle,
    textStyle,
    cart,
    numberOfLines,
    paddingVertical
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.6}
            style={[!cart ?
                styles.mainbutton : styles.cart,
            styles[`mainbutton_${type}`],
                containerStyle, { paddingVertical: paddingVertical ? paddingVertical : 20, }
            ]}>
            {cart &&
                <Feather name='shopping-cart' style={{ fontSize: 20, color: Colors.white }} />
            }
            <Text
                numberOfLines={numberOfLines}
                style={[
                    styles.buttonText,
                    styles[`buttonText_${type}`],
                    textStyle,
                ]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({

    mainbutton: {
        alignSelf: "center",
        borderRadius: 50,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,

    },
    cart: {
        flexDirection: 'row',
        paddingVertical: 15,
        alignSelf: "center",
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,

    },
    mainbutton_PRIMARY: {
        backgroundColor: Colors.Pink,
    },
    mainbutton_TERTIARY: {
        borderColor: Colors.Pink,
        borderWidth: 1
    },

    buttonText: {
        color: Colors.white,
        letterSpacing: 1,
        textAlign: 'center',
        fontFamily: Fonts.bold,
        fontSize: 16,

    },
    buttonText_TERTIARY: {
        color: Colors.Pink,
    },
});