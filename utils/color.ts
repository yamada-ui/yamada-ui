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
