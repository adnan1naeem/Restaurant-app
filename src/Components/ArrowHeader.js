import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackArrowButton from './backArrowButton'
import { Fonts } from './fonts'


const ArrowHeader = ({text}) => {

    return (
        <View style={styles.header}>
            <BackArrowButton />
            <Text style={styles.headerText}>{text}</Text>
        </View>
    )
}

export default ArrowHeader

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        flex: 1,
        fontFamily: Fonts.regular,
        width: '80%',
        textAlign: 'center',
        fontSize: 18,
    },
})