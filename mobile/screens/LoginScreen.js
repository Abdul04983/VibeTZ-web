import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Call login API
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Login</Text>
      <TextInput placeholder='Email' value={email} onChangeText={setEmail} />
      <TextInput placeholder='Password' secureTextEntry value={password} onChangeText={setPassword} />
      <Button title='Login' onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
