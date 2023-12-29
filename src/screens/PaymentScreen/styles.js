import { StyleSheet } from "react-native";
import { Fonts } from "../../Components/fonts";
import { Colors } from "../../Utils/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: Colors.white,
        borderBottomWidth: 1,
        borderColor: '#F8F8F8',
    },
    radioContainer: {
        flexDirection: 'row',
        margin: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flexDirection: {
        flexDirection: 'row'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: 10,
    },
    headerText: {
        flex: 1,
        fontFamily: Fonts.regular,
        width: '80%',
        textAlign: 'center',
        fontSize: 18,
    },
    cardContainer: {
        marginTop: 20,
    },
    card: {
        backgroundColor: '#F2F2F2',
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F2F2F2',
    },
    cardNumber: {
        fontSize: 16,
        fontFamily: 'monospace',
        color: '#4A4A4A',
    },
    payButton: {
        backgroundColor: '#1AB394',
        padding: 10,
        borderRadius: 5,
    },
    payButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
    },
    paymentOption: {
        padding: 10,
    },
    paymentMethodButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paymentMethodImage: {
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#F2F2F2',
        borderRadius: 5,
    },
    paymentMethodText: {
        fontSize: 14,
        color: '#000000',
    },
    addNewButton: {
        color: Colors.white,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        marginTop: 10,
    },
    addNewButtonText: {
        fontSize: 14,
        marginTop: 15,
        marginBottom: 35,
        color: '#4A4A4A',
    },
    creditCardButton: {
        color: Colors.white,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        flexDirection: 'row',
        alignItems: 'center',
    },
    creditCardButtonText: {
        fontSize: 14,
        color: '#4A4A4A',
        flex: 1,
    },
    chevronRight: {
        color: Colors.gray,
        fontSize: 25,
    },
});