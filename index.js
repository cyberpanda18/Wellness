import React, { useState } from 'react';
import { View, Text, Picker, TextInput, StyleSheet, Button } from 'react-native';

const AllergySelection = ({navigation}) => {
  const [selectedAllergy, setSelectedAllergy] = useState('');
  const [otherAllergy, setOtherAllergy] = useState('');
  const [selectedDisease, setSelectedDisease] = useState('');
  const [otherDisease, setOtherDisease] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [ValidationError, setValidationError] = useState('');

  // Function to handle allergy selection
  const handleAllergyChange = (itemValue, itemIndex) => {
    setSelectedAllergy(itemValue);
    if (itemValue !== "other") {
      setOtherAllergy('');
    }
  };
  const handleDiseaseChange = (itemValue, itemIndex) => {
    setSelectedDisease(itemValue);
    if (itemValue !== "other") {
      setOtherDisease('');
    }
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

  const  handleHeartRateChange = (text) => {
    if (validateNumberInput(text, 'Heart Rate')) {
      setHeartRate(text);
    }
  };
  const handleSubmit = () => {
    // Here you can handle form submission, like sending data to a server or storing in local storage
    console.log('Form submitted:', { selectedAllergy, otherAllergy, selectedDisease, otherDisease, bloodPressure, heartRate});
    navigation.navigate('FitnessGoalsPage');
  };

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Blood Pressure (mmHg):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your BP (eg. 120/80)"

        value={bloodPressure}
        onChangeText={setBloodPressure}
        keyboardType="numeric"
      />
        <Text style={styles.label}>Heart Rate (per min.):</Text>
      <Text style={styles.errorText}>{ValidationError}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your heart rate"
        onChangeText={handleHeartRateChange}
        value={heartRate}
        keyboardType="numeric"
        maxLength={3}
      />

      <Text style={styles.label}>Select Allergy:</Text>
      <Picker
        selectedValue={selectedAllergy}
        onValueChange={handleAllergyChange}
        style={styles.picker}
      >
        <Picker.Item label="Select an allergy" value="" />
        <Picker.Item label="Peanuts" value="peanuts" />
        <Picker.Item label="Shellfish" value="shellfish" />
        <Picker.Item label="Milk" value="milk" />
        <Picker.Item label="Eggs" value="eggs" />
        <Picker.Item label="Wheat" value="wheat" />
        <Picker.Item label="Other" value="other" />
      </Picker>
      {selectedAllergy === "other" && (
        <TextInput
          style={styles.otherInput}
          placeholder="Enter Other Allergy seperated by comma"
          value={otherAllergy}
          onChangeText={setOtherAllergy}
        />
      )}
    <Text style={styles.label}>Select Chronic Disease:</Text>
    <Picker
      selectedValue={selectedDisease}
      onValueChange={handleDiseaseChange}
      style={styles.picker}
    >
      <Picker.Item label="Select a chronic disease" value="" />
      <Picker.Item label="Diabetes" value="diabetes" />
      <Picker.Item label="Hypertension" value="hypertension" />
      <Picker.Item label="Asthma" value="asthma" />
      <Picker.Item label="Arthritis" value="arthritis" />
      <Picker.Item label="Other" value="other" />
    </Picker>
    {selectedDisease === "other" && (
      <TextInput
        style={styles.otherInput}
        placeholder="Enter Other Chronic Disease"
        value={otherDisease}
        onChangeText={setOtherDisease}
      />
    )}

     <Button title="Submit" onPress={handleSubmit} color="#007AFF" />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    height: 40,
    width: '100%',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingBottom: 10,
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
  otherInput: {
    marginTop: 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default AllergySelection;
