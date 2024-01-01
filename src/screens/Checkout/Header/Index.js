import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../Utils/Colors'
import { Fonts } from '../../../Components/fonts'

const Index = ({ Cart, Checkout, }) => {
    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <View style={styles.line} />
                <View style={styles.titleContainer}>
                    <Text style={styles.num}>1</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.titleContainer}>
                    <Text style={styles.num}>2</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.titleContainer}>
                    <Text style={styles.num}>3</Text>
                </View>
                <View style={styles.line} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <View style={styles.line1} />
                <View style={{}}>
                    <Text style={styles.num1}>Menu</Text>
                </View>
                <View style={styles.line1} />
                <View style={{}}>
                    <Text style={[styles.num1, { color: Cart ? Colors.black : Colors.Ligt_black, }]}>Cart</Text>
                </View>
                <View style={styles.line1} />
                <View style={{}}>
                    <Text style={styles.num1}>Checkout</Text>
                </View>
                <View style={styles.line1} />
            </View>
        </>

    )
}

export default Index

const styles = StyleSheet.create({
    line: { flex: 1, height: 3, backgroundColor: Colors.yellow },
    titleContainer: { height: 26, width: 26, backgroundColor: Colors.yellow, borderRadius: 13 },
    num: { textAlign: 'center', color: Colors.white, fontSize: 15 },

    line1: { flex: 1, },
    num1: { textAlign: 'center', fontSize: 15, fontFamily: Fonts.regular, paddingLeft: 20 }
})