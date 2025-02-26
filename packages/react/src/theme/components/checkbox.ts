import type { ComponentMultiStyle } from "../../core"

export const Checkbox: ComponentMultiStyle<"Checkbox"> = {
  baseStyle: {
    container: {
      _readOnly: { cursor: "auto" },
      _disabled: { cursor: "not-allowed" },
    },
    icon: ({ colorScheme: c = "primary" }) => ({
      border: "2px solid",
      borderColor: "inherit",
      color: ["white", "black"],
      transitionDuration: "moderate",
      transitionProperty: "box-shadow",
      _checked: {
        bg: [`${c}.500`, `${c}.600`],
        borderColor: [`${c}.500`, `${c}.600`],
        color: ["white", "black"],
        _hover: {
          bg: [`${c}.600`, `${c}.700`],
          borderColor: [`${c}.600`, `${c}.700`],
        },

        _readOnly: {
          bg: [`${c}.500`, `${c}.600`],
          borderColor: [`${c}.500`, `${c}.600`],
        },
        _disabled: {
          bg: ["blackAlpha.400", "whiteAlpha.300"],
          borderColor: ["transparent", "transparent"],
        },
      },
      _indeterminate: {
        bg: [`${c}.500`, `${c}.600`],
        borderColor: [`${c}.500`, `${c}.600`],
        color: ["white", "black"],
      },
      _invalid: {
        borderColor: ["danger.500", "danger.400"],
        _focusVisible: {
          borderColor: "inherit",
          _checked: {
            borderColor: [`${c}.500`, `${c}.600`],
          },
        },
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _disabled: {
        bg: ["blackAlpha.200", "whiteAlpha.100"],
        borderColor: ["transparent", "transparent"],
      },
    }),
    label: {
      userSelect: "none",
      _disabled: { opacity: 0.4 },
    },
  },

  sizes: {
    sm: {
      icon: { boxSize: "3.5", fontSize: "2xs", rounded: "base" },
      label: { fontSize: "sm" },
    },
    md: {
      icon: { boxSize: "4", fontSize: "2xs", rounded: "base" },
      label: { fontSize: "md" },
    },
    lg: {
      icon: { boxSize: "5", fontSize: "sm", rounded: "base" },
      label: { fontSize: "lg" },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
  },
}
