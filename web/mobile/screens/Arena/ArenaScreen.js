import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ArenaScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 VibeTZ Arena</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PoolGameScreen')}>
        <Text>🎱 Play Pool</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CheckersGameScreen')}>
        <Text>♟️ Play Checkers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CardsGameScreen')}>
        <Text>🃏 Play Cards</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#eee', padding: 10, marginVertical: 10, width: 200, alignItems: 'center' }
});
