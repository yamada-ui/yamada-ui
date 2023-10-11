import { StringLiteral } from '@yamada-ui/utils'
import type * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs, transforms } from './config'

export const filter: Configs = {
  filter: { transform: transforms.filter() },
  blur: configs.blur('--ui-blur'),
  brightness: {
    properties: '--ui-brightness',
    transform: transforms.function('brightness'),
  },
  contrast: {
    properties: '--ui-contrast',
    transform: transforms.function('contrast'),
  },
  dropShadow: configs.prop(
    '--ui-drop-shadow',
    'shadows',
    transforms.function('drop-shadow'),
  ),
  grayscale: {
    properties: '--ui-grayscale',
    transform: transforms.function('grayscale'),
  },
  hueRotate: {
    properties: '--ui-hue-rotate',
    transform: transforms.function('hue-rotate', transforms.deg),
  },
  invert: {
    properties: '--ui-invert',
    transform: transforms.function('invert'),
  },
  saturate: {
    properties: '--ui-saturate',
    transform: transforms.function('saturate'),
  },
  sepia: {
    properties: '--ui-sepia',
    transform: transforms.function('sepia'),
  },
  backdropFilter: { transform: transforms.filter('backdrop') },
  backdropBlur: configs.blur('--ui-backdrop-blur'),
  backdropBrightness: {
    properties: '--ui-backdrop-brightness',
    transform: transforms.function('brightness'),
  },
  backdropContrast: {
    properties: '--ui-backdrop-contrast',
    transform: transforms.function('contrast'),
  },
  backdropDropShadow: configs.prop(
    '--ui-backdrop-drop-shadow',
    'shadows',
    transforms.function('drop-shadow'),
  ),
  backdropGrayscale: {
    properties: '--ui-backdrop-grayscale',
    transform: transforms.function('grayscale'),
  },
  backdropHueRotate: {
    properties: '--ui-backdrop-hue-rotate',
    transform: transforms.function('hue-rotate', transforms.deg),
  },
  backdropInvert: {
    properties: '--ui-backdrop-invert',
    transform: transforms.function('invert'),
  },
  backdropSaturate: {
    properties: '--ui-backdrop-saturate',
    transform: transforms.function('saturate'),
  },
  backdropSepia: {
    properties: '--ui-backdrop-sepia',
    transform: transforms.function('sepia'),
  },
}

export type FilterProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * The CSS `filter` property.
   */
  filter?: Token<CSS.Property.Filter, unknown, Y, M>
  /**
   * If `filter=auto`, sets the value of `--ui-blur`.
   */
  blur?: Token<StringLiteral, 'blurs', Y, M>
  /**
   * If `filter=auto`, sets the value of `--ui-brightness`.
   */
  brightness?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `filter=auto`, sets the value of `--ui-contrast`.
   */
  contrast?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `filter=auto`, sets the value of `--ui-drop-shadow`.
   */
  dropShadow?: Token<StringLiteral, 'shadows', Y, M>
  /**
   * If `filter=auto`, sets the value of `--ui-grayscale`.
   */
  grayscale?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `filter=auto`, sets the value of `--ui-hue-rotate`.
   */
  hueRotate?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `filter=auto`, sets the value of `--ui-invert`.
   */
  invert?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `filter=auto`, sets the value of `--ui-saturate`.
   */
  saturate?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `filter=auto`, sets the value of `--ui-sepia`.
   */
  sepia?: Token<StringLiteral, unknown, Y, M>
  /**
   * The CSS `backdrop-filter` property.
   */
  backdropFilter?: Token<CSS.Property.BackdropFilter, unknown, Y, M>
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-blur`.
   */
  backdropBlur?: Token<StringLiteral, 'blurs', Y, M>
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-brightness`.
   */
  backdropBrightness?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-contrast`.
   */
  backdropContrast?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-drop-shadow`.
   */
  backdropDropShadow?: Token<StringLiteral, 'shadows', Y, M>
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-grayscale`.
   */
  backdropGrayscale?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-hue-rotate`.
   */
  backdropHueRotate?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-invert`.
   */
  backdropInvert?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-saturate`.
   */
  backdropSaturate?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-sepia`.
   */
  backdropSepia?: Token<StringLiteral, unknown, Y, M>
}
