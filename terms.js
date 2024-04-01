import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';

const ConsentAndAgreementPage = () => {
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
  const [dataSharingConsent, setDataSharingConsent] = useState(false);

  const handleSave = () => {
    // Handle saving consent and agreement data
    console.log({
      termsAgreed,
      privacyPolicyAccepted,
      dataSharingConsent
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>Terms and Conditions:</Text>
        <Switch
          value={termsAgreed}
          onValueChange={setTermsAgreed}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Privacy Policy:</Text>
        <Switch
          value={privacyPolicyAccepted}
          onValueChange={setPrivacyPolicyAccepted}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Data Sharing Consent:</Text>
        <Switch
          value={dataSharingConsent}
          onValueChange={setDataSharingConsent}
        />
      </View>
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
  },
});

export default ConsentAndAgreementPage;
