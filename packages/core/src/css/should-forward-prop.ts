import { pseudosProperties, stylesProperties } from '../styles'

const UIProps = new Set([
  ...stylesProperties,
  ...pseudosProperties,
  'textStyle',
  'layerStyle',
  'apply',
  'noOfLines',
  'focusBorderColor',
  'errorBorderColor',
  'as',
  '__css',
  'css',
  'sx',
])

const HTMLProps = new Set(['htmlWidth', 'htmlHeight', 'htmlSize', 'htmlTranslate'])

export const shouldForwardProp = (prop: string): boolean =>
  HTMLProps.has(prop) || !UIProps.has(prop)
