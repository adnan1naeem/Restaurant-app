import { Image, View } from 'react-native'
import React from 'react'
import { ImageAssets } from '../../../Components/ImageImports'
import CustomButton from '../../../Components/CustomButton'
import { styles } from './styles'

const Index = ({ navigation }) => {
    return (
        <View style={{ flex: 1, }}>
            <Image source={ImageAssets.Welcome} style={styles.Image_Welcome} />
            <CustomButton containerStyle={styles.primary_Button} title={"Zaczynamy"} onPress={() => navigation.navigate('Login')} />
            <CustomButton title={"Zaloguj"} type='TERTIARY' onPress={() => alert('Coming Soon..')} />
        </View>
    )
}

export default Index

