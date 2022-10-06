import { VarTokens, SemanticValue } from '../functions'
import { escape, isObject, merge, calc } from '../utils'
import { Pseudos, pseudos } from '../configs'
import { CSSMap, Dict } from '../types'

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

    if (!isSemantic) {
      if (token.startsWith('spaces') && !isObject(value)) {
        const keys = token.split('.')
        const [firstKey, ...restKeys] = keys

        const negativeToken = `${firstKey}.-${restKeys.join('.')}`

        const negativeValue = calc.negate(value)
        const negativeReference = calc.negate(reference)

        cssMap[negativeToken] = {
          value: negativeValue,
          var: variable,
          ref: negativeReference,
        }
      }

      cssVars[variable] = value

      cssMap[token] = {
        value,
        var: variable,
        ref: reference,
      }

      continue
    }

    value = isObject<SemanticValue<string, string | number, 'ununion'>>(value)
      ? value
      : { default: value }

    const fetchParent = (value: string | number = '') => {
      const [parent] = token.split('.')

      const _token = [parent, value].join('.')

      const tokenValue = tokens[_token]

      if (!tokenValue) return value

      const { reference } = tokenToVar(_token, prefix)

      return reference
    }

    cssVars = merge(
      cssVars,
      Object.entries(value).reduce((_cssVar, [semanticToken, semanticValue]) => {
        const parentRef = fetchParent(semanticValue)

        if (semanticToken === 'default') {
          _cssVar[variable] = parentRef

          return _cssVar
        }

        const pseudo = pseudos[semanticToken as keyof Pseudos] ?? semanticToken

        _cssVar[pseudo] = { [variable]: parentRef }

        return _cssVar
      }, {} as any),
    )

    cssMap[token] = {
      value: reference,
      var: variable,
      ref: reference,
    }
  }

  return { cssMap, cssVars }
}
