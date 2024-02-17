import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[zstyles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/3581369/pexels-photo-3581369.jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text>Hawa Mahal</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  cardElevated: {},
  cardImage: {
    height: 180,
    resizeMode: 'cover',
  },
  cardBody: {},
});
