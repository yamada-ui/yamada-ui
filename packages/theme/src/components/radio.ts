import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Radio: ComponentMultiStyle<"Radio"> = {
  baseStyle: {
    container: {
      _disabled: { cursor: "not-allowed" },
      _readOnly: { cursor: "auto" },
    },
    icon: ({ colorScheme: c = "primary" }) => ({
      _checked: {
        _before: {
          bg: [`${c}.500`, `${c}.600`],
          content: `""`,
          display: "inline-block",
          rounded: "full",
        },
        _disabled: {
          _before: {
            bg: ["blackAlpha.400", "whiteAlpha.300"],
          },
          _dark: {
            _before: {
              bg: "whiteAlpha.300",
            },
          },
        },
        _hover: {
          _before: {
            bg: [`${c}.600`, `${c}.700`],
          },
        },
      },
      _disabled: {
        bg: ["blackAlpha.200", "whiteAlpha.100"],
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _invalid: {
        _focusVisible: {
          borderColor: ["inherit", "inherit"],
        },
        borderColor: ["danger.500", "danger.400"],
      },
      alignItems: "center",
      border: "2px solid",
      borderColor: "inherit",
      color: "white",
      display: "inline-flex",
      justifyContent: "center",
      rounded: "full",
      transitionDuration: "normal",
      transitionProperty: "box-shadow",
    }),
    label: {
      _disabled: { opacity: 0.4 },
      userSelect: "none",
    },
  },

  sizes: {
    sm: {
      icon: {
        _before: {
          boxSize: "1.5",
        },
        boxSize: "3.5",
      },
      label: { fontSize: "sm" },
    },
    md: {
      icon: {
        _before: {
          boxSize: "2",
        },
        boxSize: "4",
      },
      label: { fontSize: "md" },
    },
    lg: {
      icon: {
        _before: {
          boxSize: "3",
        },
        boxSize: "5",
      },
      label: { fontSize: "lg" },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
  },
}
