import { ScrollView, View, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from '../../../Components/CustomText'
import BackArrowButton from '../../../Components/backArrowButton'
import SocialLoginContainer from '../../../Components/SocialLoginContainer'
import CustomTextInput from '../../../Components/CustomTextInput'
import CustomButton from '../../../Components/CustomButton'
import { styles } from './styles'
import { Container } from '../../../Utils/ContainerStyle'

const Index = ({ navigation }) => {
    return (
        <View style={Container.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <BackArrowButton navigation={navigation} />
                <CustomText customStyle={styles.Heading_Text} title={`Yumminutkęod zamówienia!`} />
                <View style={styles.social_LoginContaienr}>
                    <SocialLoginContainer id={'google'} />
                    <SocialLoginContainer id={'facebook'} />
                    <SocialLoginContainer id={'apple'} />
                </View>
                <View style={styles.inputContainer}>
                    <CustomTextInput heading={'Imię i Nazwisko'} />
                    <CustomTextInput heading={'Email'} />
                    <CustomTextInput heading={'Hasło'} />
                    <CustomTextInput heading={'Powtórz hasło'} />
                </View>
                <CustomButton onPress={() => navigation.replace("ChoseRestaurant")} title="Załóż konto" />
                <CustomText customStyle={styles.textFooter} title={'Zakładając konto zgadzasz się z naszym regulaminem oraz polityką prywatności.'} />
            </ScrollView>
        </View>

    )
}

export default Index

