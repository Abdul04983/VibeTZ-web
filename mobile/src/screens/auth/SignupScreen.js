import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { ToastAndroid } from 'react-native';

const schema = yup.object().shape({
  username: yup.string().required("Jina linahitajika"),
  email: yup.string().email("Email si sahihi").required("Email inahitajika"),
  password: yup.string().min(6, "Min 6 herufi").required("Password inahitajika"),
});

export default function SignupScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://YOUR_BACKEND_URL/api/auth/register", data);
      ToastAndroid.show("Akaunti imefungwa!", ToastAndroid.SHORT);
    } catch (err) {
      ToastAndroid.show("Kosa: Jaribu tena!", ToastAndroid.LONG);
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Jina kamili"
            style={styles.input}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Text style={styles.error}>{errors.username?.message}</Text>

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

      <Button title="Jiunge" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8, borderRadius: 4 },
  error: { color: 'red', marginBottom: 5 }
});
