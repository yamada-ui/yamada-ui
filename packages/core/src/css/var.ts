import { escape, merge, calc, Dict, isArray } from '@yamada-ui/utils'
import { createGradient, pseudos } from '../styles'
import { VarTokens } from '../theme'
import { CSSMap, StyledTheme } from '../theme.types'

type Var = {
  variable: string
  reference: string
}

const createVar = (token: string, prefix: string): Var => {
  const variable = `--${[prefix, escape(token, '-')].filter(Boolean).join('-')}`
  const reference = `var(${variable})`

  return { variable, reference }
}

const tokenToVar = (_token: string, prefix: string): Var => {
  const token = _token.replace(/\./g, '-')

  return createVar(token, prefix)
}

export const createVars = (
  tokens: VarTokens,
  prefix: string = 'ui',
): { cssMap: CSSMap; cssVars: Dict } => {
  let cssMap: CSSMap = {}
  let cssVars: Dict = {}

  for (let [token, { isSemantic, value }] of Object.entries(tokens)) {
    const { variable, reference } = tokenToVar(token, prefix)

    let [lightValue, darkValue] = isArray(value) ? [...value] : [value]

    if (token.startsWith('gradients')) {
      lightValue = createGradient(lightValue, {
        __cssMap: cssMap,
      } as StyledTheme<Dict>)
      darkValue = createGradient(darkValue, {
        __cssMap: cssMap,
      } as StyledTheme<Dict>)
    }

    if (!isSemantic) {
      if (token.startsWith('spaces')) {
        const keys = token.split('.')
        const [firstKey, ...restKeys] = keys

        const negativeToken = `${firstKey}.-${restKeys.join('.')}`

        const negativeValue = calc.negate(lightValue)
        const negativeReference = calc.negate(reference)

        cssMap[negativeToken] = {
          value: negativeValue,
          var: variable,
          ref: negativeReference,
        }
      }

      cssVars[variable] = lightValue

      if (darkValue)
        cssVars = merge(cssVars, { [pseudos._dark]: { [variable]: darkValue } })

      cssMap[token] = {
        value: lightValue,
        var: variable,
        ref: reference,
      }

      continue
    }

    const fetchParent = (
      value: string | number = '',
    ): [string | undefined, string | number] => {
      const [parent] = token.split('.')

      const _token = [parent, value].join('.')

      const tokenValue = tokens[_token]

      if (!tokenValue) return [, value]

      const { variable, reference } = tokenToVar(_token, prefix)

      return [variable, reference]
    }

    const [parentVar, parentRef] = fetchParent(lightValue)

    cssVars = merge(cssVars, { [variable]: parentRef })

    if (darkValue) {
      const [, parentRef] = fetchParent(darkValue)

      cssVars = merge(cssVars, { [pseudos._dark]: { [variable]: parentRef } })
    }

    cssMap[token] = {
      value: parentVar ?? lightValue,
      var: variable,
      ref: reference,
    }
  }

  return { cssMap, cssVars }
}
