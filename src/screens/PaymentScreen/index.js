import React, { useState } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { Container } from '../../Utils/ContainerStyle';
import RadioButtonComp from './component/radioButton';
import MaterialIcons from 'react-native-vector-icons/Feather'
import { styles } from './styles';
import ArrowHeader from '../../Components/ArrowHeader';

const Index = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioPress = (value) => {
    setSelectedOption(value);
  };

  return (
    <View style={Container.container}>
      <ArrowHeader text={'Select a payment method'} />

      <View style={styles.cardContainer}>
        <RadioButtonComp icon={require('../../../assets/master-card.png')}
          text={'Master Card'}
          value={'mastercard'}
          onPress={() => handleRadioPress('mastercard')}
          selectedOption={selectedOption} />
        <RadioButtonComp
          icon={require('../../../assets/apple-pay.png')}
          text={'Apple Pay'}
          value={'applePay'}
          onPress={() => handleRadioPress('applePay')}
          selectedOption={selectedOption} />
        <RadioButtonComp
          icon={require('../../../assets/google-pay.png')}
          text={'Google Pay'}
          value={'googlePay'}
          onPress={() => handleRadioPress('googlePay')}
          selectedOption={selectedOption} />
      </View>

      <Text style={styles.addNewButtonText}>Add new</Text>
      <View style={styles.radioContainer}>
        <View style={styles.flexDirection}>
          <Image source={require('../../../assets/google-pay.png')} style={styles.paymentMethodImage} />
          <Text>Credit/Debit card</Text>
        </View>
        <MaterialIcons name='chevron-right' style={styles.chevronRight} />
      </View>

    </View>
  );
};

export default Index;
