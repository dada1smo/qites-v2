import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { FunctionComponent } from 'react';

interface ImageProps extends NextImageProps {}

const Image: FunctionComponent<ImageProps> = (props) => {
  return <NextImage {...props} />;
};

export default Image;
