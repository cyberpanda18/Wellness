import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Picker } from 'react-native';

const HealthForm = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [ValidationError, setValidationError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [email, setEmail] = useState('');
  

  const handleSubmit = () => {
    // Here you can handle form submission, like sending data to a server or storing in local storage
    console.log('Form submitted:', { name, age, contact, gender, email, height, weight});
    navigation.navigate('AllergySelection')
  };
  const validateContact = (value) => {
    if (!value.match(/^[0-9]*$/)) {
      setValidationError(`Enter valid 10 digits`);
      return false;
    }
    else{
      setValidationError('');
    }
    return true;
  };

  const validateNumberInput = (value, fieldName) => {
    if (!value.match(/^[0-9]*$/)) {
      setValidationError(`Enter valid digits`);
      return false;
    } else {
      setValidationError('');
    }
    return true;
  };

  const handleAgeChange = (text) => {
    if (validateNumberInput(text, 'Age')) {
      setAge(text);
    }
  };

  const handleContactChange = (text) => {
    if (validateContact(text)) {
      setContact(text);
    }
  };

  const handleheightChange = (text) => {
    if (validateNumberInput(text, 'Height')) {
      setHeight(text);
    }
  };
 
  // Function to handle email input change
  const handleEmailChange = (text) => {
    if (!validateEmailFormat(text)) {
      setEmailError('Enter valid email');
      return;
    }
    setEmail(text);
  };

  // Function to validate email format
  const validateEmailFormat = (text) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={setName}
        value={name}
      />
      <Text style={styles.label}>Age:</Text>
      <Text style={styles.errorText}>{ValidationError}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        onChangeText={handleAgeChange}
        value={age}
        keyboardType="numeric"
      />
      <View style={styles.container}>
      <Text style={styles.label}>Gender:</Text>
      <Picker
        style={styles.input}
        selectedValue={gender}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>
    </View>

      <Text style={styles.label}>Contact:</Text>
      <Text style={styles.errorText}>{ValidationError}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your contact number"
          onChangeText={handleContactChange}
          value={contact}
          keyboardType="numeric"
          maxLength={10}
        />
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.errorText}>{emailError}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text style={styles.label}>Height (cm):</Text>
      <Text style={styles.errorText}>{ValidationError}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your height"
        onChangeText={handleheightChange}
        value={height}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Weight (kg):</Text>
      <Text style={styles.errorText}>{ValidationError}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your weight"
        onChangeText={setWeight}
        value={weight}
        keyboardType="numeric"
      />
      
      <Button title="Submit" onPress={handleSubmit} color="#007AFF" />
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    marginBottom: 15,
    padding: 10,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
  },
  errorText: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
});

export default HealthForm;
