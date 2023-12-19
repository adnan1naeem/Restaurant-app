import { StyleSheet } from 'react-native';
import { Fonts } from '../../../Components/fonts';
import { Colors } from '../../../Utils/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20
    },
    Heading_Text: {
        paddingVertical: 30,
    },
    socialContainer: {
        backgroundColor: 'red',
        flexDirection: 'row',
    },
    textFooter: {
        fontSize: 12,
        fontFamily: Fonts.regular,
        color: Colors.gray,
        textAlign: 'center',
        paddingVertical: 10,
        paddingBottom: 25
    },
    inputContainer: {
        marginVertical: 30
    },
    social_LoginContaienr: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});