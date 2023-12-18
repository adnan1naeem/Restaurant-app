import { Dimensions, Platform } from "react-native";

export const Dimensions_Height = Dimensions.get('screen').height;
export const Dimensions_Widht = Dimensions.get('screen').width;
export const Android = Platform.OS === 'android'
