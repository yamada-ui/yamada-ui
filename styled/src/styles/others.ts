import { getMemoizedObject as get, Dict, StringLiteral } from '@yamada-ui/utils'
import { Token } from '../'
import { Configs } from './'

const getPriority = (theme: any, token: any, css: any = {}) => {
  const result: Dict = {}

  const obj = get(theme, `styles.${token}`, {})

  for (const prop in obj) {
    const done = prop in css && css[prop] != null

    if (!done) result[prop] = obj[prop]
  }

  return result
}

export const others: Configs = {
  layerStyle: {
    processResult: true,
    transform: (value, theme, css) => getPriority(theme, `layerStyles.${value}`, css),
  },
  textStyle: {
    processResult: true,
    transform: (value, theme, css) => getPriority(theme, `textStyles.${value}`, css),
  },
}

export type OthersProps<Y = 'responsive', M = 'colorScheme'> = {
  layerStyle?: Token<StringLiteral, 'layerStyles', Y, M>
  textStyle?: Token<StringLiteral, 'textStyles', Y, M>
}
