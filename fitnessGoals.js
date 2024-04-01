import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Slider, Button, StyleSheet } from 'react-native';

const FitnessGoalsPage = ({navigation}) => {
  const [targetWeight, setTargetWeight] = useState('');
  const [desiredBodyFat, setDesiredBodyFat] = useState('');
  const [exerciseFrequency, setExerciseFrequency] = useState('3'); // Default value: 3 times a week
  const [exercisePreference, setExercisePreference] = useState('cardio');
  const [otherExercisePreference, setOtherExercisePreference] = useState('');
  const [dietaryPreference, setDietaryPreference] = useState('');
  const [otherDietaryPreference, setOtherDietaryPreference] = useState('');
  const [calorieIntakeGoal, setCalorieIntakeGoal] = useState('');

  const handleSave = () => {
    // Handle saving fitness goals (e.g., send to server, store in local storage)
    console.log('Fitness goals saved:', { targetWeight, desiredBodyFat, exerciseFrequency, exercisePreference,dietaryPreference,
        calorieIntakeGoal });
        navigation.navigate('LifestyleInfoPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fitness Goals</Text>
        <Text style={styles.label}>Target Body Weight (kg):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter target weight"
          keyboardType="numeric"
          value={targetWeight}
          onChangeText={setTargetWeight}
        />

 
        <Text style={styles.label}>Desired Body Fat (%):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter desired body fat percentage"
          keyboardType="numeric"
          value={desiredBodyFat}
          onChangeText={setDesiredBodyFat}
        />

        <Text style={styles.label}>Exercise Frequency:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter number of days per week"
          keyboardType="numeric"
          value={exerciseFrequency}
          onChangeText={setExerciseFrequency}
        />

        <Text style={styles.label}>Exercise Preference:</Text>
        <Picker
          selectedValue={exercisePreference}
          onValueChange={(itemValue) => {
            setExercisePreference(itemValue);
            if (itemValue === "other") {
              setOtherExercisePreference('');
            }
          }}
          style={styles.picker}
        >
          <Picker.Item label="Cardio" value="cardio" />
          <Picker.Item label="Strength Training" value="strength_training" />
          <Picker.Item label="Yoga" value="yoga" />
          <Picker.Item label="Other" value="other" />
        </Picker>
        {exercisePreference === "other" && (
        <TextInput
          style={styles.input}
          placeholder="Enter other exercise preference"
          value={otherExercisePreference}
          onChangeText={setOtherExercisePreference}
        />
      )}

      <Text style={styles.label}>Dietary Preference:</Text>
      <Picker
        style={styles.picker}
        selectedValue={dietaryPreference}
        onValueChange={(itemValue) => {
          setDietaryPreference(itemValue);
          if (itemValue === "other") {
            setOtherDietaryPreference('');
          }
        }}
      >
        <Picker.Item label="Select dietary preference" value="" />
        <Picker.Item label="Vegetarian" value="vegetarian" />
        <Picker.Item label="Vegan" value="vegan" />
        <Picker.Item label="Gluten-Free" value="glutenFree" />
        <Picker.Item label="Other" value="other" />
      </Picker>

      {dietaryPreference === "other" && (
        <TextInput
          style={styles.input}
          placeholder="Enter other dietary preference"
          value={otherDietaryPreference}
          onChangeText={setOtherDietaryPreference}
        />
      )}
       <Text style={styles.label}>Daily Calorie Intake Goal:</Text>
       <Text>Recommended daily calorie intake is 2,000 calories a day for women and 2,500 for men</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter daily calorie intake goal"
        keyboardType="numeric"
        value={calorieIntakeGoal}
        onChangeText={setCalorieIntakeGoal}
      />
      <View style={styles.buttonContainer}>
        <Button title="Next" onPress={handleSave} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
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
  },
  sliderValue: {
    fontSize: 16,
    textAlign: 'center',
  },
  picker: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default FitnessGoalsPage;
