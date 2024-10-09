import type { ComponentMultiStyle } from "@yamada-ui/core"
import {
  isAccessible,
  isGray,
  shadeColor,
  transparentizeColor,
} from "@yamada-ui/utils"

export const Calendar: ComponentMultiStyle<"Calendar"> = {
  baseStyle: {
    button: {
      _disabled: {
        boxShadow: "none",
        cursor: "not-allowed",
        opacity: 0.4,
        _focusVisible: {
          boxShadow: "0 0 0 3px rgba(125, 125, 125, 0.6)",
        },
      },
    },
    cell: {
      transitionDuration: "slower",
      transitionProperty: "common",
    },
    container: {
      gap: "md",
    },
    content: {},
    control: {
      color: ["blackAlpha.500", "whiteAlpha.500"],
      fontSize: "1.5em",
      _hidden: {
        opacity: 0,
        pointerEvents: "none",
      },
    },
    date: {},
    day: {
      color: ["blackAlpha.800", "whiteAlpha.700"],
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
        _ripple: {
          display: "none",
        },
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _holiday: {
        color: ["red.600", "red.400"],
      },
      _outside: {
        color: ["blackAlpha.500", "whiteAlpha.500"],
      },
      _weekend: {
        color: ["red.600", "red.400"],
      },
    },
    header: {},
    label: {
      color: ["blackAlpha.700", "whiteAlpha.600"],
    },
    labelIcon: {
      color: ["blackAlpha.500", "whiteAlpha.500"],
      fontSize: "1.5em",
    },
    month: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    next: {},
    prev: {},
    row: {},
    weekday: {
      alignItems: "center",
      color: ["blackAlpha.700", "whiteAlpha.600"],
      justifyContent: "center",
      userSelect: "none",
    },
    year: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },

  sizes: {
    sm: {
      button: {
        h: 8,
      },
      container: {
        fontSize: "xs",
      },
      content: {
        w: 56,
      },
      control: {
        h: 8,
        w: 8,
      },
      day: {
        h: 8,
        w: 8,
      },
      label: {
        h: 8,
      },
      weekday: {
        h: 8,
        w: 8,
      },
    },
    md: {
      button: {
        h: 10,
      },
      container: {
        fontSize: "sm",
      },
      content: {
        w: "17.5rem",
      },
      control: {
        h: 10,
        w: 10,
      },
      day: {
        h: 10,
        w: 10,
      },
      label: {
        h: 10,
      },
      weekday: {
        h: 10,
        w: 10,
      },
    },
    lg: {
      button: {
        h: 12,
      },
      container: {
        fontSize: "md",
      },
      content: {
        w: "21rem",
      },
      control: {
        h: 12,
        w: 12,
      },
      day: {
        h: 12,
        w: 12,
      },
      label: {
        h: 12,
      },
      weekday: {
        h: 12,
        w: 12,
      },
    },
    full: {
      button: {
        h: 12,
      },
      container: {
        fontSize: "md",
        w: "full",
      },
      content: {
        w: "full",
      },
      control: {
        h: 12,
        w: 12,
      },
      day: {
        h: 12,
        w: "full",
      },
      label: {
        h: 12,
      },
      weekday: {
        h: 12,
        w: "full",
      },
    },
  },

  variants: {
    solid: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
      button: {
        _hover: {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
          _disabled: {
            bg: ["initial", "initial"],
          },
        },
        _selected: {
          bg: isGray(c)
            ? [`${c}.50`, `${c}.700`]
            : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
          color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
        },
      },
      cell: {
        _between: {
          bg: [
            isGray(c) ? transparentizeColor(`${c}.50`, 0.48)(t, m) : `${c}.50`,
            shadeColor(`${c}.300`, 72)(t, m),
          ],
          _end: {
            roundedRight: "md",
          },
          _start: {
            roundedLeft: "md",
          },
        },
      },
      day: {
        _end: {
          roundedLeft: "0",
        },
        _hover: {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
          _between: {
            bg: ["initial", "initial"],
          },
          _disabled: {
            bg: ["initial", "initial"],
          },
          _selected: {
            bg: isGray(c)
              ? [`${c}.100`, `${c}.700`]
              : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
          },
        },
        _selected: {
          bg: isGray(c)
            ? [`${c}.100`, `${c}.700`]
            : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
          borderColor: ["transparent", "transparent"],
          color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
        },
        _start: {
          roundedRight: "0",
        },
        _today: {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
          _between: {
            bg: ["initial", "initial"],
          },
        },
      },
    }),
    subtle: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
      button: {
        _hover: {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
          _disabled: {
            bg: ["initial", "initial"],
          },
        },
        _selected: {
          bg: [
            isGray(c) ? `${c}.50` : `${c}.100`,
            shadeColor(`${c}.300`, 58)(t, m),
          ],
          color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
        },
      },
      cell: {
        _between: {
          bg: [
            isGray(c)
              ? transparentizeColor(`${c}.50`, 0.24)(t, m)
              : transparentizeColor(`${c}.50`, 0.64)(t, m),
            shadeColor(`${c}.300`, 76)(t, m),
          ],
          _end: {
            roundedRight: "md",
          },
          _start: {
            roundedLeft: "md",
          },
        },
      },
      day: {
        _end: {
          roundedLeft: "0",
        },
        _hover: {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
          _between: {
            bg: ["initial", "initial"],
          },
          _disabled: {
            bg: ["initial", "initial"],
          },
          _selected: {
            bg: [
              isGray(c) ? `${c}.50` : `${c}.100`,
              shadeColor(`${c}.300`, 58)(t, m),
            ],
          },
        },
        _selected: {
          bg: [
            isGray(c) ? `${c}.50` : `${c}.100`,
            shadeColor(`${c}.300`, 58)(t, m),
          ],
          borderColor: ["transparent", "transparent"],
          color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
        },
        _start: {
          roundedRight: "0",
        },
        _today: {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
          _between: {
            bg: ["initial", "initial"],
          },
        },
      },
    }),
    unstyled: {
      button: {
        h: "auto",
        _active: {
          bg: "inherit",
        },
        _disabled: {
          boxShadow: "inherit",
          cursor: "inherit",
          opacity: "inherit",
          _focusVisible: {
            boxShadow: "inherit",
          },
        },
        _hover: {
          bg: "inherit",
        },
      },
      container: {
        fontSize: "inherit",
        gap: "inherit",
      },
      content: {
        w: "auto",
      },
      control: {
        fontSize: "inherit",
        h: "auto",
        w: "auto",
        _active: {
          bg: "inherit",
        },
        _hidden: {
          opacity: "inherit",
          pointerEvents: "inherit",
        },
        _hover: {
          bg: "inherit",
        },
      },
      day: {
        h: "auto",
        w: "auto",
        _active: {
          bg: "inherit",
        },
        _disabled: {
          boxShadow: "inherit",
          cursor: "inherit",
          opacity: "inherit",
          _focusVisible: {
            boxShadow: "inherit",
          },
        },
        _holiday: {
          color: "inherit",
        },
        _hover: {
          bg: "inherit",
        },
        _outside: {
          color: "inherit",
        },
        _weekend: {
          color: "inherit",
        },
      },
      label: {
        h: "auto",
        pointerEvents: "inherit",
        _active: {
          bg: "inherit",
          pointerEvents: "inherit",
        },
        _hover: {
          bg: "inherit",
        },
      },
      labelIcon: {
        color: "inherit",
      },
      weekday: {
        color: "inherit",
        h: "auto",
        userSelect: "auto",
        w: "auto",
      },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
    variant: "solid",
  },
}
