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
        _focusVisible: {
          boxShadow: "0 0 0 3px rgba(125, 125, 125, 0.6)",
        },
        boxShadow: "none",
        cursor: "not-allowed",
        opacity: 0.4,
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
      _hidden: {
        opacity: 0,
        pointerEvents: "none",
      },
      color: ["blackAlpha.500", "whiteAlpha.500"],
      fontSize: "1.5em",
    },
    date: {},
    day: {
      _disabled: {
        _ripple: {
          display: "none",
        },
        cursor: "not-allowed",
        opacity: 0.4,
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
      color: ["blackAlpha.800", "whiteAlpha.700"],
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
    solid: ({ colorMode: m, colorScheme: c = "primary", theme: t }) => ({
      button: {
        _hover: {
          _disabled: {
            bg: ["initial", "initial"],
          },
          bg: ["blackAlpha.50", "whiteAlpha.50"],
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
          _end: {
            roundedRight: "md",
          },
          _start: {
            roundedLeft: "md",
          },
          bg: [
            isGray(c) ? transparentizeColor(`${c}.50`, 0.48)(t, m) : `${c}.50`,
            shadeColor(`${c}.300`, 72)(t, m),
          ],
        },
      },
      day: {
        _end: {
          roundedLeft: "0",
        },
        _hover: {
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
          bg: ["blackAlpha.50", "whiteAlpha.50"],
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
          _between: {
            bg: ["initial", "initial"],
          },
          bg: ["blackAlpha.50", "whiteAlpha.50"],
        },
      },
    }),
    subtle: ({ colorMode: m, colorScheme: c = "primary", theme: t }) => ({
      button: {
        _hover: {
          _disabled: {
            bg: ["initial", "initial"],
          },
          bg: ["blackAlpha.50", "whiteAlpha.50"],
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
          _end: {
            roundedRight: "md",
          },
          _start: {
            roundedLeft: "md",
          },
          bg: [
            isGray(c)
              ? transparentizeColor(`${c}.50`, 0.24)(t, m)
              : transparentizeColor(`${c}.50`, 0.64)(t, m),
            shadeColor(`${c}.300`, 76)(t, m),
          ],
        },
      },
      day: {
        _end: {
          roundedLeft: "0",
        },
        _hover: {
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
          bg: ["blackAlpha.50", "whiteAlpha.50"],
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
          _between: {
            bg: ["initial", "initial"],
          },
          bg: ["blackAlpha.50", "whiteAlpha.50"],
        },
      },
    }),
    unstyled: {
      button: {
        _active: {
          bg: "inherit",
        },
        _disabled: {
          _focusVisible: {
            boxShadow: "inherit",
          },
          boxShadow: "inherit",
          cursor: "inherit",
          opacity: "inherit",
        },
        _hover: {
          bg: "inherit",
        },
        h: "auto",
      },
      container: {
        fontSize: "inherit",
        gap: "inherit",
      },
      content: {
        w: "auto",
      },
      control: {
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
        fontSize: "inherit",
        h: "auto",
        w: "auto",
      },
      day: {
        _active: {
          bg: "inherit",
        },
        _disabled: {
          _focusVisible: {
            boxShadow: "inherit",
          },
          boxShadow: "inherit",
          cursor: "inherit",
          opacity: "inherit",
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
        h: "auto",
        w: "auto",
      },
      label: {
        _active: {
          bg: "inherit",
          pointerEvents: "inherit",
        },
        _hover: {
          bg: "inherit",
        },
        h: "auto",
        pointerEvents: "inherit",
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
