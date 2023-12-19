import { StyleSheet } from 'react-native';
import { Dimensions_Height, Dimensions_Widht } from '../../../Utils/Dimensions';

export const styles = StyleSheet.create({
    Image_Welcome: {
        height: Dimensions_Height / 1.5,
        width: Dimensions_Widht,
        resizeMode: 'contain'
    },
    primary_Button: {
        marginVertical: 20
    }
});