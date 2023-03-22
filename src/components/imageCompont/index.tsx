import { Image, ImageProps } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import type mediaProps from '../mediaProps';
import memoize from '../../utils';

function CacheImage({ source, ...props }: mediaProps & ImageProps) {
  const [media, setMedia] = useState(source);

  useLayoutEffect(() => {
    getCashMedia(source.uri);
  }, [source]);

  async function getCashMedia(url: string) {
    let res = await memoize(url);
    setMedia(res);
  }
  return <Image {...props} source={media} />;
}

export default CacheImage;
