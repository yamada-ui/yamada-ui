import { ui, UIComponent, HTMLUIProps } from '@yamada-ui/core'
import NextImage, { ImageProps as NextImageProps } from 'next/image'

export type ImageProps = Omit<HTMLUIProps<'img'>, keyof NextImageProps> &
  NextImageProps

export const Image: UIComponent<'img', ImageProps> = ui(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'src',
      'alt',
      'width',
      'height',
      'fill',
      'loader',
      'quality',
      'priority',
      'loading',
      'placeholder',
      'blurDataURL',
      'unoptimized',
      'onLoadingComplete',
    ].includes(prop),
})
