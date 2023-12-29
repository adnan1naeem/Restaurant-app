import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { Container } from '../../Utils/ContainerStyle';
import CustomTextInput from '../../Components/CustomTextInput'
import { styles } from './styles';
import ArrowHeader from '../../Components/ArrowHeader';
import CustomButton from '../../Components/CustomButton';
import { Colors } from '../../Utils/Colors';

const Index = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [date, setDate] = useState('');
  const [cvc, setCVC] = useState('');
  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!isChecked);
  };

  return (
    <View style={Container.container}>
      <ArrowHeader text={'Add a debit or credit card'} />
      <CustomTextInput value={cardNumber} onChangeText={setCardNumber} heading={'Card Number'} />
      <View style={styles.rowContainer}>
        <CustomTextInput
          onChangeText={setDate}
          value={date}
          heading="MM/YY"
          headingTitleStyle={styles.headingTitleStyle}
        />
        <CustomTextInput
          onChangeText={setCVC}
          value={cvc}
          heading="CVC/CVV"
          headingTitleStyle={styles.headingTitleStyle}
        />
      </View>

      <CustomTextInput value={cardHolderName} onChangeText={setCardHolderName} heading={'Name of the card holder'} />

      <View style={styles.termsContainer}>
        <TouchableOpacity onPress={toggleCheckbox}>
          <View style={[styles.checkboxContainer, { borderColor: isChecked ? Colors.Pink : "#000", backgroundColor: isChecked ? Colors.Pink : Colors.white }]}>
            {isChecked && <Text style={styles.checkboxChecked}>✓</Text>}
          </View>
        </TouchableOpacity>
        <Text style={styles.termsText}>I agree to the Terms and Conditions</Text>
      </View>
      <CustomButton containerStyle={styles.buttonStyle} onPress={() => navigation.replace("ChoseRestaurant")} title="Done" />

    </View>
  );
};

export default Index;
