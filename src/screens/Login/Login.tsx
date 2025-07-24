import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import NavigationString from '../../Navigations/NavigationString';
import { StackNavigationProp } from '@react-navigation/stack';
import WrapperContainer from '../../components/WrapperContainr';
import { appEvents } from '../../../events/appEvents';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  // ...other routes
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');



  const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleSignUp = () => {
    // Navigate to Sign Up screen
    console.log('Navigate to Sign Up');
    appEvents("signup", {})
    navigation.navigate(NavigationString.SignUp); // Adjust the screen name as per your navigation setup
  };

  return (
    <WrapperContainer>
      <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
     
       <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.blueText}>Sign Up</Text>
      </TouchableOpacity>
    
      
    </View>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,

  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  blueText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 16,
    fontSize: 16,
  },
});

export default Login;