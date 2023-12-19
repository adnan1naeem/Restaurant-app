import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ImageAssets } from './ImageImports'
import Feather from 'react-native-vector-icons/Feather'


const Header = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={ImageAssets?.drawer} style={{ height: 40, width: 40, resizeMode: 'contain' }} />
            </TouchableOpacity>
            <Image source={ImageAssets?.Logo} style={{ height: 65, width: 64, resizeMode: 'contain' }} />
            <TouchableOpacity>
                <Feather name='shopping-cart' style={{ fontSize: 30, }} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }
})