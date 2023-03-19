import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { CacheImage, CacheVideo } from 'react-native-media-cache';

export default function App() {
  return (
    <View style={styles.container}>
      {/* cache Image */}
      <CacheImage
        style={styles.image}
        source={{
          uri: 'https://thumbs.dreamstime.com/b/closeup-portrait-muscular-man-workout-barbell-gym-brutal-bodybuilder-athletic-six-pack-perfect-abs-shoulders-55122231.jpg',
        }}
        resizeMode="cover"
      />
      {/* cache Video */}
      <CacheVideo
        style={styles.image}
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { height: 500, width: 500 },
});
