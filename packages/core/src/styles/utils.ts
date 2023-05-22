import { keyframes as emotionKeyframes, Keyframes, CSSObject } from '@emotion/react'
import { isArray, isObject, isString, Dict } from '@yamada-ui/utils'
import { ColorScheme } from '../css'
import { ThemeToken } from '../theme'
import { StyledTheme } from '../theme.types'
import { Transform } from './config'

export const defaultColorStyles = ['primary', 'secondary', 'warning', 'danger', 'link']

const directions: Record<string, string> = {
  'to-t': 'to top',
  'to-tr': 'to top right',
  'to-r': 'to right',
  'to-br': 'to bottom right',
  'to-b': 'to bottom',
  'to-bl': 'to bottom left',
  'to-l': 'to left',
  'to-tl': 'to top left',
}

const directionValues = new Set(Object.values(directions))

export const globalValues = new Set([
  'none',
  '-moz-initial',
  'inherit',
  'initial',
  'revert',
  'unset',
])

export const isCSSFunction = (value: any) => {
  return isString(value) && value.includes('(') && value.includes(')')
}

export const analyzeCSSValue = (value: any) => {
  let n = parseFloat(value.toString())
  const unit = value.toString().replace(String(n), '')

  return { isUnitless: !unit, value, unit }
}

export const tokenToCSSVar = (token: ThemeToken, value: any) => (theme: StyledTheme<Dict>) => {
  token = `${token}.${value}` as ThemeToken

  if (isObject(theme.__cssMap) && token in theme.__cssMap) {
    return theme.__cssMap[token].ref
  } else {
    return value
  }
}

export const createGradient: Transform = (value, theme) => {
  if (value == null || globalValues.has(value)) return value

  const regex = /(?<_type>^[a-z-A-Z]+)\((?<_values>(.*))\)/g
  const { _type, _values } = regex.exec(value)?.groups ?? {}

  if (!_type || !_values) return value

  const type = _type.includes('-gradient') ? _type : `${_type}-gradient`

  const [maybeDirection, ...colors] = _values
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean)

  if (!colors.length) return value

  const direction = maybeDirection in directions ? directions[maybeDirection] : maybeDirection

  colors.unshift(direction)

  const values = colors.map((_color) => {
    if (directionValues.has(_color)) return _color

    const i = _color.indexOf(' ')

    let [color, _ratio] = i !== -1 ? [_color.slice(0, i), _color.slice(i + 1)] : [_color]

    const ratio = isCSSFunction(_ratio) ? _ratio : _ratio && _ratio.split(' ')

    const token = `colors.${color}`
    color = token in theme.__cssMap ? theme.__cssMap[token].ref : color

    if (ratio) {
      return [color, ...(isArray(ratio) ? ratio : [ratio])].join(' ')
    } else {
      return color
    }
  })

  return `${type}(${values.join(', ')})`
}

export const mode =
  <L extends any, D extends any>(light: L, dark: D) =>
  (colorScheme: ColorScheme | undefined = 'light'): L | D =>
    colorScheme === 'light' ? light : dark

export const isDefaultColor =
  (defaultColor: any, otherColor: any) =>
  (colorStyle: string | undefined): any =>
    colorStyle && defaultColorStyles.includes(colorStyle) ? defaultColor : otherColor

export const keyframes = (...arg: CSSObject[]): Keyframes => emotionKeyframes(...arg)
