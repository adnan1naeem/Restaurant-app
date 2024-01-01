import { Image, StatusBar, View } from 'react-native'
import React from 'react'
import { styles } from './Styles'
import { ImageAssets } from '../../../Components/ImageImports';
import { Colors } from '../../../Utils/Colors';


const Splash = ({ navigation }) => {

    React.useEffect(() => {
        const timer = setTimeout(async () => {
            navigation.replace("Welcome")
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <StatusBar
                backgroundColor={Colors.blue}
                barStyle="light-content"
            />
            <View style={styles.container}>
                <Image style={styles.Logo} source={ImageAssets.Logo} />
            </View>
        </>
    )
}

export default Splash


