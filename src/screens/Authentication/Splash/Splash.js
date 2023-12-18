import { Image, View } from 'react-native'
import React from 'react'
import { styles } from './Styles'
import { ImageAssets } from '../../../Components/ImageImports';


const Splash = ({ navigation }) => {

    React.useEffect(() => {
        const timer = setTimeout(async () => {
            navigation.navigate("Welcome")
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.Logo} source={ImageAssets.Logo} />
        </View>
    )
}

export default Splash


