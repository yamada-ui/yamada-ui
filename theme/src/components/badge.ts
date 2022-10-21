import { defaultColors } from '../'
import { ComponentStyle } from '@yamada-ui/styled'
import { transparentizeColor, toneColor, getColor } from '@yamada-ui/utils'

export const Badge: ComponentStyle = {
  baseStyle: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    px: 1,
    textTransform: 'uppercase',
    fontSize: 'xs',
    borderRadius: 'sm',
    fontWeight: 'bold',
  },

  variants: {
    solid: ({ theme, colorScheme: c }) => {
      if (c && defaultColors.includes(c)) {
        return {
          bg: [toneColor(c, 500)(theme), transparentizeColor(toneColor(c, 500)(theme), 0.6)(theme)],
          color: [`white`, `whiteAlpha.800`],
        }
      } else {
        return {
          bg: [`${c}.500`, transparentizeColor(`${c}.500`, 0.6)(theme)],
          color: [`white`, `whiteAlpha.800`],
        }
      }
    },
    subtle: ({ theme, colorScheme: c }) => {
      if (c && defaultColors.includes(c)) {
        return {
          bg: [
            toneColor(c, 100)(theme),
            transparentizeColor(toneColor(c, 200)(theme), 0.16)(theme),
          ],
          color: [toneColor(c, 800)(theme), toneColor(c, 200)(theme)],
        }
      } else {
        return {
          bg: [`${c}.100`, transparentizeColor(`${c}.200`, 0.16)(theme)],
          color: [`${c}.800`, `${c}.200`],
        }
      }
    },
    outline: ({ theme, scheme, colorScheme: c }) => {
      if (c && defaultColors.includes(c)) {
        const color =
          scheme === 'light'
            ? toneColor(c, 500)(theme)
            : transparentizeColor(toneColor(c, 200)(theme), 0.8)(theme)

        return {
          color,
          boxShadow: `inset 0 0 0px 1px ${color}`,
        }
      } else {
        const color =
          scheme === 'light'
            ? getColor(theme, `${c}.500`)
            : transparentizeColor(`${c}.200`, 0.8)(theme)

        return {
          color,
          boxShadow: `inset 0 0 0px 1px ${color}`,
        }
      }
    },
  },

  defaultProps: {
    variant: 'subtle',
    colorScheme: 'gray',
  },
}
