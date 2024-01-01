import { Image, View } from 'react-native'
import React from 'react'
import { ImageAssets } from '../../../Components/ImageImports'
import CustomButton from '../../../Components/CustomButton'
import { styles } from './styles'

const Index = ({ navigation }) => {
    return (
        <View style={{ flex: 1, }}>
            <Image source={ImageAssets.Welcome} style={styles.Image_Welcome} />
            <CustomButton containerStyle={styles.primary_Button} title={"Here we go"} onPress={() => navigation.navigate('PaymentScreen')} />
            <CustomButton containerStyle={{ width: '90%' }} title={"Log in"} type='TERTIARY' onPress={() => navigation.navigate('Login')} />
        </View>
    )
}

export default Index

