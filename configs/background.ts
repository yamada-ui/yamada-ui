import * as CSS from 'csstype'
import { Token } from '../types'
import { Configs, configs, transforms } from './'

export const background: Configs = {
  background: configs.color('background'),
  backgroundColor: configs.color('backgroundColor'),
  backgroundImage: configs.propTransform('backgroundImage', transforms.bgImage),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: { transform: transforms.bgClip },
  bgSize: configs.prop('backgroundSize'),
  bgPosition: configs.prop('backgroundPosition'),
  bg: configs.color('background'),
  bgColor: configs.color('backgroundColor'),
  bgPos: configs.prop('backgroundPosition'),
  bgRepeat: configs.prop('backgroundRepeat'),
  bgAttachment: configs.prop('backgroundAttachment'),
  bgGradient: configs.propTransform('backgroundImage', transforms.bgGradient),
  bgClip: { transform: transforms.bgClip },
}

Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage,
})

export type BackgroundProps<Y = 'responsive', M = 'scheme'> = {
  bg?: Token<CSS.Property.Color, 'colors', Y, M>
  bgClip?: Token<CSS.Property.BackgroundClip | 'text', Y, M>
  backgroundClip?: Token<CSS.Property.BackgroundClip | 'text', Y, M>
  background?: Token<CSS.Property.Color, 'colors', Y, M>
  bgColor?: Token<CSS.Property.Color, 'colors', Y, M>
  backgroundColor?: Token<CSS.Property.Color, 'colors', Y, M>
  backgroundImage?: Token<CSS.Property.BackgroundImage, unknown, Y, M>
  bgGradient?: Token<CSS.Property.BackgroundImage, unknown, Y, M>
  backgroundSize?: Token<CSS.Property.BackgroundSize | number, unknown, Y, M>
  bgPos?: Token<CSS.Property.BackgroundPosition | number, unknown, Y, M>
  backgroundPosition?: Token<CSS.Property.BackgroundPosition | number, unknown, Y, M>
  bgImage?: Token<CSS.Property.BackgroundImage, unknown, Y, M>
  bgImg?: Token<CSS.Property.BackgroundImage, unknown, Y, M>
  bgRepeat?: Token<CSS.Property.BackgroundRepeat, unknown, Y, M>
  backgroundRepeat?: Token<CSS.Property.BackgroundRepeat, unknown, Y, M>
  bgSize?: Token<CSS.Property.BackgroundSize | number, unknown, Y, M>
  bgAttachment?: Token<CSS.Property.BackgroundAttachment, unknown, Y, M>
  backgroundAttachment?: Token<CSS.Property.BackgroundAttachment, unknown, Y, M>
  bgPosition?: Token<CSS.Property.BackgroundPosition | number, unknown, Y, M>
}
