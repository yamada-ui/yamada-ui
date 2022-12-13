import { ComponentStyle, mode, isDefaultColor } from '@yamada-ui/core'
import { toneColor, getColor } from '@yamada-ui/utils'

export const Progress: ComponentStyle = {
  baseStyle: {
    track: {
      bg: ['gray.100', 'whiteAlpha.300'],
    },
    filledTrack: ({ theme: t, colorScheme: s, colorStyle: c = 'blue', hasStripe, isAnimation }) => {
      hasStripe = !isAnimation && hasStripe

      const l = mode(500, 300)(s)

      const color = mode('rgba(255, 255, 255, 0.15)', 'rgba(0,0,0,0.1)')(s)

      const bgColor = isDefaultColor(toneColor(c, l)(t, s), getColor(`${c}.${l}`)(t, s))(c)

      const bgImage = hasStripe
        ? `linear-gradient(
            45deg,
            ${color} 25%,
            transparent 25%,
            transparent 50%,
            ${color} 50%,
            ${color} 75%,
            transparent 75%,
            transparent
          )`
        : isAnimation
        ? `linear-gradient(
            to right,
            transparent 0%,
            ${bgColor} 50%,
            transparent 100%
          )`
        : undefined

      return {
        transitionProperty: 'common',
        transitionDuration: 'slow',
        bgImage,
        ...(hasStripe ? { bgSize: '1rem 1rem' } : {}),
        ...(!isAnimation ? { bgColor } : {}),
      }
    },
  },

  sizes: {
    xs: {
      track: {
        h: '1',
      },
    },
    sm: {
      track: {
        h: '2',
      },
    },
    md: {
      track: {
        h: '3',
      },
    },
    lg: {
      track: {
        h: '4',
      },
    },
  },

  defaultProps: {
    size: 'md',
    colorStyle: 'blue',
  },
}
