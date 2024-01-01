import { Platform, StyleSheet } from 'react-native';
export const Container = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 50 : 25,
        paddingHorizontal: 20
    },

});