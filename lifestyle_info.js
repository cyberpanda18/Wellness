import React, { useState } from 'react';
import { View, Text, Picker, TextInput, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const LifestyleInfoPage = ({navigation}) => {
  const [sleepDuration, setSleepDuration] = useState('');
  const [sleepQuality, setSleepQuality] = useState(50);
  const [stressLevel, setStressLevel] = useState('');
  const [smokingStatus, setSmokingStatus] = useState('');
  const [alcoholConsumption, setAlcoholConsumption] = useState('');
  const [physicalActivityLevel, setPhysicalActivityLevel] = useState('');

  const handleSave = () => {
    // Handle saving lifestyle info data
    console.log({
      sleepDuration,
      sleepQuality,
      stressLevel,
      smokingStatus,
      alcoholConsumption,
      physicalActivityLevel
    });
    navigation.navigate('ConsentAndAgreementPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sleep Duration (hours):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter sleep duration"
        keyboardType="numeric"
        value={sleepDuration}
        onChangeText={setSleepDuration}
      />

      <Text style={styles.label}>Sleep Quality (0-10):</Text>
      <Text>1 indicates low quality</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10}
        step={1}
        value={sleepQuality}
        onValueChange={setSleepQuality}
      />
      <Text style={styles.sliderValue}>{sleepQuality.toFixed(0)}</Text>

      <Text style={styles.label}>Stress Level:</Text>
      <Picker
        style={styles.picker}
        selectedValue={stressLevel}
        onValueChange={setStressLevel}
      >
        <Picker.Item label="Select stress level" value="" />
        <Picker.Item label="Low" value="low" />
        <Picker.Item label="Intermediate" value="intermediate" />
        <Picker.Item label="High" value="high" />
      </Picker>

      <Text style={styles.label}>Smoking Status:</Text>
      <Picker
        style={styles.picker}
        selectedValue={smokingStatus}
        onValueChange={setSmokingStatus}
      >
        <Picker.Item label="Select smoking status" value="" />
        <Picker.Item label="Non-Smoker" value="nonSmoker" />
        <Picker.Item label="Occasional Smoker" value="occasionalSmoker" />
        <Picker.Item label="Regular Smoker" value="regularSmoker" />
      </Picker>

      <Text style={styles.label}>Alcohol Consumption:</Text>
      <Picker
        style={styles.picker}
        selectedValue={alcoholConsumption}
        onValueChange={setAlcoholConsumption}
      >
        <Picker.Item label="Select alcohol consumption status" value="" />
        <Picker.Item label="Never touched" value="nonDrinker" />
        <Picker.Item label="Occasional drinker" value="occasionalDrinker" />
        <Picker.Item label="Regular drinker" value="regularDrinker" />
      </Picker>

      <Text style={styles.label}>Physical Activity Level:</Text>
      <Picker
        style={styles.picker}
        selectedValue={physicalActivityLevel}
        onValueChange={setPhysicalActivityLevel}
      >
        <Picker.Item label="Select activity status" value="" />
        <Picker.Item label="No activity" value="noActivity" />
        <Picker.Item label="Proactive" value="proactive" />
        <Picker.Item label="Only on weekends" value="weekender" />
      </Picker>

      <Button title="Next" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  slider: {
    marginBottom: 15,
  },
  sliderValue: {
    textAlign: 'center',
    marginBottom: 15,
  },
  picker: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    marginBottom: 15,
  },
});

export default LifestyleInfoPage;
