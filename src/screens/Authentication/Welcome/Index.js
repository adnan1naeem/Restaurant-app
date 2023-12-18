import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { ImageAssets } from '../../../Components/ImageImports'
import { Dimensions_Height, Dimensions_Widht } from '../../../Utils/Dimensions'
import { Colors } from '../../../Utils/Colors'
import CustomButton from '../../../Components/CustomButton'

const Index = () => {

    return (
        <View style={{ flex: 1, }}>
            <Image source={ImageAssets.Welcome} style={{ height: Dimensions_Height / 1.5, width: Dimensions_Widht, resizeMode: 'contain' }} />
            <CustomButton text={"qwdwqd"} onPress={() => alert('12')} />


        </View>
    )
}

export default Index

