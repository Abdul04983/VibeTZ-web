import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { ToastAndroid } from 'react-native';

const schema = yup.object().shape({
  email: yup.string().email("Email si sahihi").required("Email inahitajika"),
  password: yup.string().required("Nenosiri linahitajika"),
});

export default function LoginScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://YOUR_BACKEND_URL/api/auth/login", data);
      ToastAndroid.show("Umeingia kwenye akaunti!", ToastAndroid.SHORT);
    } catch (err) {
      ToastAndroid.show("Kosa: Angalia taarifa zako!", ToastAndroid.LONG);
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Text style={styles.error}>{errors.email?.message}</Text>

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Text style={styles.error}>{errors.password?.message}</Text>

      <Button title="Ingia" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8, borderRadius: 4 },
  error: { color: 'red', marginBottom: 5 }
});
