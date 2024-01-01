import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../Utils/Colors'
import ArrowHeader from '../../../Components/ArrowHeader'
import Header from '../Header/Index'
import { Dimensions_Widht } from '../../../Utils/Dimensions'

const Index = ({ navigation }) => {
    return (
        <>
            <StatusBar
                backgroundColor={Colors.light_pink}
                barStyle="dark-content"
            />
            <View>
                <View style={{ backgroundColor: Colors.light_pink, paddingHorizontal: 20, paddingVertical: 20 }}>
                    <ArrowHeader navigation={navigation} text={'Checkout'} />
                </View>
                <View style={{ position: 'absolute', bottom: -40, width: Dimensions_Widht }}>
                    <Header Cart />
                </View>

            </View>


        </>
    )
}

export default Index

const styles = StyleSheet.create({})