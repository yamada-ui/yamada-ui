import { TinyColor } from '@ctrl/tinycolor'
import { getMemoizedObject as get } from './'
import { Dict, StyledTheme } from 'types'

export const getColor = (theme: StyledTheme<Dict>, color: string, fallback?: string) => {
  const hex: string | undefined = get(theme, `colors.${color}`, color)
  const { isValid } = new TinyColor(hex)

  return isValid ? hex : fallback
}

export const transparentizeColor =
  (color: string, opacity: number) => (theme: StyledTheme<Dict>) => {
    const raw = getColor(theme, color)

    return new TinyColor(raw).setAlpha(opacity).toRgbString()
  }

export const toneColor = (color: string, l: number) => (theme: StyledTheme<Dict>) => {
  const raw = getColor(theme, color)

  if (l < 0 || 900 < l) return color

  let n = (l - 500) / 10

  const isLighten = n <= 0

  if (isLighten) n *= -1

  if (n !== 0) n = n - 5 * (isLighten ? 1 : -1)

  return new TinyColor(raw)[isLighten ? 'lighten' : 'shade'](n).toString()
}
