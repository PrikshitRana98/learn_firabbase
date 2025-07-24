import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Initial: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Initial</Text>
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
    fontSize
    : 28,
    fontWeight: 'bold',
  },
});

export default Initial;