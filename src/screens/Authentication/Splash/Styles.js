import { StyleSheet } from 'react-native';
import { Colors } from '../../../Utils/Colors';


export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blue,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Logo: {
        resizeMode: 'contain',
        height: 173,
        width: 170
    }
});