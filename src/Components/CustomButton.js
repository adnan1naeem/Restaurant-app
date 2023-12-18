import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../Utils/Colors'
import { Dimensions_Widht } from '../Utils/Dimensions'

const CustomButton = ({
    text,
    onPress,
    type = "PRIMARY",
    containerStyle,
    textStyle,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.6}
            style={[
                styles.mainbutton,
                styles[`mainbutton_${type}`],
                containerStyle,
            ]}
        >

            <Text
                style={[
                    styles.buttonText,
                    styles[`buttonText_${type}`],
                    textStyle,
                ]}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({

    mainbutton: {
        paddingVertical: 20,
        alignSelf: "center",
        borderRadius: 25,
        width: Dimensions_Widht / 1.2
    },
    mainbutton_PRIMARY: {
        backgroundColor: Colors.Pink,
    },
    mainbutton_TERTIARY: {
        borderColor: Colors.Pink,
        borderWidth: 2
    },

    buttonText: {
        color: Colors.white,
        letterSpacing: 1,
        textAlign: 'center'

    },
    buttonText_TERTIARY: {
        color: Colors.Pink,

    },
});