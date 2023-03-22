# react-native-media-cache

🚩 FastImage, FastVideo performant React Native image component.

## Installation

```sh
npm install --save react-native-media-cache
```

## Usage

```js
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

// ...
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

Apache

---

### Adopting at scale

<a href="https://github.com/sponsors/abhi3691">
  <img align="right" width="160" alt="This library helped you? Consider sponsoring!" src=".github/funding-octocat.svg">
</a>

react-native-atom-template is provided _as is_, I work on it in my free time.

If you're integrating react-native-atom-template , consider [funding this project](https://github.com/sponsors/abhi3691) and <a href="mailto:abhinandvk41@gmail.com?subject=Adopting VisionCamera at scale">contact me</a> to receive premium enterprise support, help with issues, prioritize bugfixes, request features, help at integrating VisionCamera and/or Frame Processors, and more.
