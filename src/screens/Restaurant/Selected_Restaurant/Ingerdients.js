import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../../Components/CustomText'
import { Fonts } from '../../../Components/fonts'
import { Colors } from '../../../Utils/Colors'

const Ingerdients = ({ status, title }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', }}>
                <Text>dsa</Text>
                <CustomText customStyle={{ fontSize: 14, fontFamily: Fonts.regular, paddingHorizontal: 5 }} title={title} />
            </View>
            <CustomText customStyle={{ fontSize: 14, color: Colors.Ligt_black }} title={status} />
        </View>
    )
}

export default Ingerdients

const styles = StyleSheet.create({})