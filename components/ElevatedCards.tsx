import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardelevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardelevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardelevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardelevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardelevated]}>
          <Text>more</Text>
        </View>
        <View style={[styles.card, styles.cardelevated]}>
          <Text>😎</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 6,
  },
  cardelevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
