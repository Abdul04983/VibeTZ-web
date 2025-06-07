import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // TODO: Call signup API
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Signup</Text>
      <TextInput placeholder='Username' value={username} onChangeText={setUsername} />
      <TextInput placeholder='Email' value={email} onChangeText={setEmail} />
      <TextInput placeholder='Password' secureTextEntry value={password} onChangeText={setPassword} />
      <Button title='Signup' onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;
