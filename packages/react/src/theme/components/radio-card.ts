import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { shadeColor } from "../../utils"
import { Radio } from "./radio"

export const RadioCard: ComponentMultiStyle<"RadioCard"> = mergeMultiStyle(
  Radio,
  {
    baseStyle: ({ colorScheme: c = "primary" }) => ({
      container: {
        borderWidth: "1px",
        cursor: "pointer",
        display: "flex",
        flex: "1",
        flexDirection: "column",
        position: "relative",
        transitionDuration: "moderate",
        transitionProperty: "common",
        _checked: {
          zIndex: "yamcha",
        },
        _disabled: {
          opacity: 0.4,
        },
      },
      description: {
        color: "muted",
      },
      icon: {
        _checked: {
          _hover: {
            _before: {
              bg: [`${c}.500`, `${c}.600`],
            },
          },
        },
        _disabled: {
          bg: "inherit",
        },
        _focusVisible: {
          boxShadow: "inherit",
        },
      },
      label: {
        alignItems: "center",
        display: "flex",
      },
      labelContent: {
        flex: "1",
      },
    }),

    variants: {
      outline: ({ colorScheme: c = "primary" }) => ({
        container: {
          vars: [
            {
              name: "color",
              token: "colors",
              value: [`${c}.600`, `${c}.500`],
            },
            {
              name: "errorColor",
              token: "colors",
              value: ["danger.500", "danger.400"],
            },
          ],
          _checked: {
            borderColor: "$color",
            boxShadow: "0 0 0 1px $color",
            _focusVisible: {
              borderColor: "$color",
              boxShadow: "0 0 0 3px $color",
            },
          },
          _focusVisible: {
            boxShadow: "0 0 0 3px $color",
          },
          _invalid: {
            borderColor: "$errorColor",
            boxShadow: "0 0 0 1px $errorColor",
            _focusVisible: {
              borderColor: "$color",
              boxShadow: "0 0 0 3px $color",
            },
          },
        },
        icon: {
          _checked: {
            _disabled: {
              _before: {
                bg: `${c}.500`,
              },
              _dark: {
                _before: {
                  bg: `${c}.600`,
                },
              },
            },
            _invalid: {
              _focusVisible: {
                borderColor: ["inherit", "inherit"],
              },
            },
          },
          _invalid: {
            _focusVisible: {
              borderColor: "$errorColor",
            },
          },
        },
      }),
      subtle: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
        container: {
          vars: [
            {
              name: "color",
              token: "colors",
              value: [`${c}.600`, `${c}.500`],
            },
            {
              name: "errorColor",
              token: "colors",
              value: ["danger.500", "danger.400"],
            },
          ],
          _checked: {
            bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
            borderColor: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
          },
          _focusVisible: {
            boxShadow: "0 0 0 3px $color",
          },
          _invalid: {
            borderColor: "$errorColor",
            boxShadow: "0 0 0 1px $errorColor",
            _focusVisible: {
              borderColor: "$color",
              boxShadow: "0 0 0 3px $color",
            },
          },
        },
        icon: {
          _checked: {
            borderColor: [`${c}.500`, `${c}.600`],
            _disabled: {
              borderColor: [`${c}.500`, `${c}.600`],
              _before: {
                bg: `${c}.500`,
              },
              _dark: {
                _before: {
                  bg: `${c}.600`,
                },
              },
            },
            _invalid: {
              _focusVisible: {
                borderColor: [`${c}.500`, `${c}.600`],
              },
            },
          },
          _invalid: {
            _focusVisible: {
              borderColor: "$errorColor",
            },
          },
        },
      }),
      surface: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
        container: {
          vars: [
            {
              name: "color",
              token: "colors",
              value: [`${c}.600`, `${c}.500`],
            },
            {
              name: "errorColor",
              token: "colors",
              value: ["danger.500", "danger.400"],
            },
          ],
          _checked: {
            bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
            borderColor: "$color",
            boxShadow: "0 0 0 1px $color",
            _focusVisible: {
              borderColor: "$color",
              boxShadow: "0 0 0 3px $color",
            },
          },
          _focusVisible: {
            borderColor: "$color",
            boxShadow: "0 0 0 3px $color",
          },
          _invalid: {
            borderColor: "$errorColor",
            boxShadow: "0 0 0 1px $errorColor",
            _focusVisible: {
              borderColor: "$color",
              boxShadow: "0 0 0 3px $color",
            },
          },
        },
        icon: {
          _checked: {
            borderColor: [`${c}.500`, `${c}.600`],
            _disabled: {
              borderColor: [`${c}.500`, `${c}.600`],
              _before: {
                bg: `${c}.500`,
              },
              _dark: {
                _before: {
                  bg: `${c}.600`,
                },
              },
            },
            _invalid: {
              _focusVisible: {
                borderColor: [`${c}.500`, `${c}.600`],
              },
            },
          },
          _invalid: {
            _focusVisible: {
              borderColor: "$errorColor",
            },
          },
        },
      }),
    },

    sizes: {
      sm: {
        addon: {
          borderTopWidth: "1px",
          fontSize: "xs",
          mt: "2",
          mx: "$spaces.-3",
          pt: "2",
          px: "3",
        },
        container: {
          px: "3",
          py: "2",
          rounded: "md",
        },
        description: {
          fontSize: "xs",
          mt: "0.5",
        },
        icon: {
          boxSize: "4",
          _before: {
            boxSize: "2",
          },
        },
        label: {
          gap: "2",
        },
      },
      md: {
        addon: {
          borderTopWidth: "1px",
          fontSize: "sm",
          mt: "3",
          mx: "$spaces.-4",
          pt: "3",
          px: "4",
        },
        container: {
          px: "4",
          py: "3",
          rounded: "md",
        },
        description: {
          fontSize: "sm",
          mt: "1",
        },
        icon: {
          boxSize: "5",
          _before: {
            boxSize: "3",
          },
        },
        label: {
          gap: "3",
        },
      },
      lg: {
        addon: {
          borderTopWidth: "1px",
          fontSize: "md",
          mt: "3",
          mx: "$spaces.-4",
          pt: "3",
          px: "4",
        },
        container: {
          px: "4",
          py: "3",
          rounded: "md",
        },
        description: {
          fontSize: "md",
          mt: "1",
        },
        icon: {
          boxSize: "6",
          _before: {
            boxSize: "3.5",
          },
        },
        label: {
          gap: "3",
        },
      },
    },

    defaultProps: {
      colorScheme: "primary",
      size: "md",
      variant: "outline",
    },
  },
)()
