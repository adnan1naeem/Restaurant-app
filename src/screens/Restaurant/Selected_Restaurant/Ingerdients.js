import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomText from '../../../Components/CustomText'
import { Fonts } from '../../../Components/fonts'
import { Colors } from '../../../Utils/Colors'


const Ingerdients = ({ status, title, }) => {
    const [checkBox, setCheckBox] = useState(false)

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, paddingRight: 10 }}>
            <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setCheckBox(!checkBox)} style={{ height: 26, width: 26, borderRadius: 15, borderWidth: checkBox ? 7 : 2, borderColor: checkBox ? Colors.Pink : Colors.Ligt_black }} />
                <CustomText customStyle={{ fontSize: 14, fontFamily: Fonts.regular, paddingHorizontal: 5 }} title={title} />
            </View>
            <CustomText customStyle={{ fontSize: 14, color: Colors.Ligt_black, fontFamily: Fonts.regular }} title={status} />
        </View>
    )
}

export default Ingerdients

const styles = StyleSheet.create({})