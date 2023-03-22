import React, { useLayoutEffect, useState } from 'react';
import type { VideoProperties } from 'react-native-video';
import Video from 'react-native-video';
import memoize from '../../utils';
import type mediaProps from '../mediaProps';

function CacheVideo({ source, ...props }: mediaProps & VideoProperties) {
  const [media, setMedia] = useState(source);

  useLayoutEffect(() => {
    getCashMedia(source.uri);
  }, [source]);

  async function getCashMedia(url: string) {
    let res = await memoize(url);
    setMedia(res);
  }
  return <Video {...props} source={media} />;
}

export default CacheVideo;
