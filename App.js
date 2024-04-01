import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HealthForm from './personal_info';
import AllergySelection from './index';
import FitnessGoalsPage from './fitnessGoals';
import ConsentAndAgreementPage from './terms';
import LifestyleInfoPage from './lifestyle_info';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HealthForm">
        <Stack.Screen name="HealthForm" component={HealthForm}  options={{ headerShown: false }} />
        <Stack.Screen name="AllergySelection" component={AllergySelection} />
        <Stack.Screen name="FitnessGoalsPage" component={FitnessGoalsPage} />
        <Stack.Screen name="LifestyleInfoPage" component={LifestyleInfoPage} />
        <Stack.Screen name="ConsentAndAgreementPage" component={ConsentAndAgreementPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
