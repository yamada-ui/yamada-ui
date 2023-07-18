import { getMemoizedObject as get, Dict, StringLiteral } from '@yamada-ui/utils'
import { Token } from '../css'
import { Configs } from './config'

const getPriority = (theme: any, token: any, css: any = {}) => {
  const result: Dict = {}

  const obj = get<Dict>(theme, `styles.${token}`, {})

  for (const prop in obj) {
    const done = prop in css && css[prop] != null

    if (!done) result[prop] = obj[prop]
  }

  return result
}

export const others: Configs = {
  layerStyle: {
    processResult: true,
    transform: (value, theme, css) =>
      getPriority(theme, `layerStyles.${value}`, css),
  },
  textStyle: {
    processResult: true,
    transform: (value, theme, css) =>
      getPriority(theme, `textStyles.${value}`, css),
  },
}

export type OthersProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * Apply text styles defined in `theme.layerStyles`.
   */
  layerStyle?: Token<StringLiteral, 'layerStyles', Y, M>
  /**
   * Apply text styles defined in `theme.textStyles`.
   */
  textStyle?: Token<StringLiteral, 'textStyles', Y, M>
}
