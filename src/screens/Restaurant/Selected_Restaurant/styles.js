import { StyleSheet } from "react-native";
import { Colors } from "../../../Utils/Colors";
import { Fonts } from "../../../Components/fonts";



export const styles = StyleSheet.create({
    menuItemContainer: {
        borderWidth: 1,
        height: 50,
        marginHorizontal: 10,
        borderRadius: 30,
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
        height: 90,
        width: 90,
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
        paddingTop: 12
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
    }

});
