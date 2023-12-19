import { StyleSheet } from 'react-native';
import { Colors } from '../../../Utils/Colors';
import { Dimensions_Widht } from '../../../Utils/Dimensions';
import { Fonts } from '../../../Components/fonts';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: 'red'
    },
    heading: {
        fontSize: 28,
        paddingVertical: 40
    },
    renderItemContainer: {
        backgroundColor: Colors.cart,
        margin: 5,
        padding: 12,
        width: Dimensions_Widht / 2.4,
        borderRadius: 15,
        paddingBottom: 50
    },
    flatImage: {
        height: 80,
        width: 80,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    Restaurant_Name_Flat: {
        fontSize: 16,
        paddingTop: 15,
        color: Colors.black,
        fontFamily: Fonts.SemiBold
    },
    about: {
        fontSize: 13,
        color: Colors.Ligt_black,
        fontFamily: Fonts.regular
    },
    Content_Container: {
        flex: 1,
        marginVertical: 30,
    }


});