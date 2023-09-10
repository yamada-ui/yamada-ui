import { getMemoizedObject as get, Dict, StringLiteral } from '@yamada-ui/utils'
import { Token } from '../css'
import { Configs, Transform } from './config'

const transform: Transform = (value, theme, css = {}) => {
  const resolvedCSS: Dict = {}

  const style = get<Dict>(theme, `styles.${value}`, {})

  for (const prop in style) {
    const done = prop in css && css[prop] != null

    if (!done) resolvedCSS[prop] = style[prop]
  }

  return resolvedCSS
}

export const others: Configs = {
  layerStyle: {
    isProcessResult: true,
    transform: (value, ...rest) => transform(`layerStyles.${value}`, ...rest),
  },
  textStyle: {
    isProcessResult: true,
    transform: (value, ...rest) => transform(`textStyles.${value}`, ...rest),
  },
  apply: {
    isProcessResult: true,
    transform,
  },
}

export type OthersProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * Apply layer styles defined in `theme.layerStyles`.
   */
  layerStyle?: Token<StringLiteral, 'layerStyles', Y, M>
  /**
   * Apply text styles defined in `theme.textStyles`.
   */
  textStyle?: Token<StringLiteral, 'textStyles', Y, M>
  /**
   * Apply other styles defined in `theme.styles`.
   *
   * @example
   * ```jsx
   * <Box apply='mdx.h1'>Box</Box>
   * ```
   *
   * This will apply styles defined in `theme.styles.mdx.h1`
   */
  apply?: Token<StringLiteral, unknown, Y, M>
}
