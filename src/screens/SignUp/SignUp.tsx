import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { appEvents } from '../../../events/appEvents';
import { useNavigation } from '@react-navigation/native';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const onSignUpPage = async () => {
      try {
        await appEvents("signup_page", {
          
        })
  
      } catch (error) {
        console.log('error', error)
      }
    }

  useEffect(() => {},[
    onSignUpPage()
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>

      <Button
        title="goBack"
        onPress={() => {
          navigation.goBack()
          // Handle sign up logic here
        }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default SignUp;