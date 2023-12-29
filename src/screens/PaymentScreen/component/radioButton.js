import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Colors } from '../../../Utils/Colors';
import { styles } from './../styles';

const RadioButtonComp = ({icon, text, onPress, value, selectedOption}) => {

    return (
        <TouchableOpacity style={styles.radioContainer} onPress={() => onPress(selectedOption)}>
            <View style={styles.flexDirection}>
                <Image source={icon} style={styles.paymentMethodImage} />
                <Text>{text}</Text>
            </View>
            <RadioButton.Android
                value={value}
                status={selectedOption === value ? 'checked' : 'unchecked'}
                onPress={() => onPress(selectedOption)}
                color={selectedOption === value ? Colors.Pink : 'black'}
            />
        </TouchableOpacity>

    );
};

export default RadioButtonComp;
