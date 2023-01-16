/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import LazyLoad, { LazyLoadProps } from "react-lazyload";
// import Image, { ImageProps as NextImageProps } from "next/image";

export interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  lazyLoad?: boolean;
  lazyLoadProps?: LazyLoadProps;
}

const Image = ({
  lazyLoad = true,
  lazyLoadProps = {},
  ...props
}: ImageProps) => {
  const Component: any = lazyLoad ? LazyLoad : Fragment;

  return (
    <Component {...lazyLoadProps}>
      <img {...props} />
    </Component>
  );
};

export default Image;
