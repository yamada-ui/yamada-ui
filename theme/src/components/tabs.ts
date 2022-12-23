import { ComponentMultiStyle } from '@yamada-ui/core'

export const Tabs: ComponentMultiStyle = {
  baseStyle: {
    container: ({ orientation }) => ({
      display: 'flex',
      flexDirection: orientation === 'vertical' ? 'row' : 'column',
    }),
    tab: ({ isFitted }) => ({
      flex: isFitted ? 1 : undefined,
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _focusVisible: {
        zIndex: 1,
        boxShadow: 'outline',
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: 0.4,
      },
    }),
    tabList: ({ align, orientation }) => ({
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      justifyContent: align === 'center' ? align : `flex-${align}`,
    }),
    tabPanel: {
      p: 'md',
    },
  },

  variants: {
    line: ({ colorStyle: c, orientation }) => ({
      tabList: {},
      tab: {
        _selected: {
          borderColor: 'currentColor',
        },
        _active: {},
        _disabled: {
          _active: { bg: 'none' },
        },
      },
    }),
    sticky: ({}) => ({}),
    'sticky-subtle': ({}) => ({}),
    'sticky-solid': ({}) => ({}),
    rounded: ({}) => ({}),
    'rounded-subtle': ({}) => ({}),
    'rounded-solid': ({}) => ({}),
    unstyled: {},
  },

  sizes: {
    sm: {
      tab: {
        py: 1,
        px: 4,
        fontSize: 'sm',
      },
    },
    md: {
      tab: {
        fontSize: 'md',
        py: 2,
        px: 4,
      },
    },
    lg: {
      tab: {
        fontSize: 'lg',
        py: 3,
        px: 4,
      },
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'line',
    colorStyle: 'blue',
  },
}
