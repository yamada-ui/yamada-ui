import type { ComponentMultiStyle } from "../../core"

export const Radio: ComponentMultiStyle<"Radio"> = {
  baseStyle: {
    container: {
      _readOnly: { cursor: "auto" },
      _disabled: { cursor: "not-allowed" },
    },
    icon: ({ colorScheme: c = "primary" }) => ({
      alignItems: "center",
      border: "2px solid",
      borderColor: "inherit",
      color: "white",
      display: "inline-flex",
      justifyContent: "center",
      rounded: "full",
      transitionDuration: "moderate",
      transitionProperty: "box-shadow",
      _checked: {
        _before: {
          bg: [`${c}.500`, `${c}.600`],
          content: `""`,
          display: "inline-block",
          rounded: "full",
        },
        _hover: {
          _before: {
            bg: [`${c}.600`, `${c}.700`],
          },
        },

        _disabled: {
          _before: {
            bg: "blackAlpha.400",
          },
          _dark: {
            _before: {
              bg: "whiteAlpha.300",
            },
          },
        },
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _invalid: {
        borderColor: ["danger.500", "danger.400"],
        _focusVisible: {
          borderColor: ["inherit", "inherit"],
        },
      },
      _disabled: {
        bg: ["blackAlpha.200", "whiteAlpha.100"],
      },
    }),
    label: {
      userSelect: "none",
      _disabled: { opacity: 0.4 },
    },
  },

  sizes: {
    sm: {
      icon: {
        boxSize: "3.5",
        _before: {
          boxSize: "1.5",
        },
      },
      label: { fontSize: "sm" },
    },
    md: {
      icon: {
        boxSize: "4",
        _before: {
          boxSize: "2",
        },
      },
      label: { fontSize: "md" },
    },
    lg: {
      icon: {
        boxSize: "5",
        _before: {
          boxSize: "3",
        },
      },
      label: { fontSize: "lg" },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
  },
}
