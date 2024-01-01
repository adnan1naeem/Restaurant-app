import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../../Utils/Colors";
import { Fonts } from "../../../Components/fonts";
import { Dimensions_Widht } from "../../../Utils/Dimensions";



export const styles = StyleSheet.create({
    menuItemContainer: {
        borderWidth: 1,
        height: 50,
        marginHorizontal: 10,
        borderRadius: 30,
        alignItems: 'center',

    },
    menuItemContent: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 5,


    },
    menuItemImage: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        paddingHorizontal: 30,
    },
    restaurantItemContainer: {
        backgroundColor: Colors.cart,
        marginVertical: 10,
        borderRadius: 15,
        paddingBottom: 15,
    },
    restaurantItemContent: {
        margin: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemTextContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    itemImage: {
        height: 120,
        width: 120,
        resizeMode: 'contain',
        borderTopRightRadius: 15,


    },
    itemDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 20,
    },
    itemLevelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemLevelImage: {
        height: 30,
        width: 30,
    },
    itemPriceContainer: {
        width: 150,
    },
    manuItem_name: {
        fontSize: 15,
        paddingTop: Platform.OS === 'ios' ? 12 : 6

    },
    second_flat_title: {
        fontSize: 16,
        fontFamily: Fonts.SemiBold
    },
    second_flat_about: {
        fontSize: 13,
        width: 190,
        color: Colors.Ligt_black,
        fontFamily: Fonts.regular,
        paddingVertical: 12
    },
    second_flat_status: {
        fontSize: 13,
        paddingHorizontal: 10,
    },
    boxContaienr: {
        backgroundColor: Colors.light_pink,
        marginVertical: 20,
        borderRadius: 15,
        padding: 15
    },
    boxtitle: {
        fontSize: 14,
        fontFamily: Fonts.SemiBold,
        color: Colors.black
    },
    boxsubHeading: {
        fontSize: 12,
        fontFamily: Fonts.regular,
        color: Colors.Ligt_black
    },
    boxRequierdbtn: {
        backgroundColor: Colors.gray,
        borderRadius: 10,
        padding: 5,
        height: 38,
        paddingTop: 6,
        paddingHorizontal: 10
    },
    downIcon: {
        fontSize: 18,
        color: Colors.white
    },
    sheetImage: {
        height: 160,
        width: 160,
        alignSelf: 'center',
    },
    sheetHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sheetHeaderText: {
        fontSize: 20,
        fontFamily: Fonts.SemiBold,
        color: Colors.black
    },
    shareIcon: {
        backgroundColor: Colors.light_pink,
        padding: 10,
        borderRadius: 20
    },
    requiredText: {
        fontSize: 14,
        color: Colors.white,
        fontFamily: Fonts.regular
    },
    share: {
        color: Colors.Pink,
        fontSize: 20
    },
    currentPrice: {
        fontSize: 16,
        fontFamily: Fonts.SemiBold,
        color: Colors.yellow
    },
    discription: {
        fontSize: 13,
        fontFamily: Fonts.regular,
        color: Colors.Ligt_black,
        width: Dimensions_Widht / 1.3,
        paddingVertical: 5,
    },
    ingredientsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    adition: {
        backgroundColor: Colors.transparent,
        borderRadius: 10,
        padding: 5,
        height: 38,
        paddingTop: 6,
        paddingHorizontal: 10
    },
    additionalTitle: {
        fontSize: 14,
        color: Colors.Ligt_black,
        fontFamily: Fonts.regular
    },
    additionView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    additionBtn: {
        backgroundColor: Colors.Pink,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingVertical: 10,
        maxWidth: 200
    },
    additionTitle: {
        fontFamily: Fonts.bold,
        fontSize: 14,
        color: Colors.white,
        textAlign: 'center'
    },
    additionIngredients: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    requiredContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20
    },
    subHeadingChose: {
        fontSize: 12,
        fontFamily: Fonts.regular,
        color: Colors.Ligt_black
    }


});
