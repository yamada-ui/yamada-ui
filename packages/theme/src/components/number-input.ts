import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Input } from "./input"

export const NumberInput: ComponentMultiStyle<"NumberInput"> = mergeMultiStyle(
  Input,
  {
    baseStyle: {
      stepper: {
        _active: {
          bg: ["blackAlpha.200", "whiteAlpha.200"],
        },
        _disabled: {
          cursor: "not-allowed",
          opacity: 0.4,
        },
        _hover: {
          bg: ["blackAlpha.100", "whiteAlpha.100"],
        },
        _last: {
          borderColor: "inherit",
          borderStartWidth: "1px",
          borderTopWidth: "1px",
          mt: "-1px",
        },
        _readOnly: { cursor: "auto" },
        borderColor: "inherit",
        borderStartWidth: "1px",
        borderStyle: "solid",
        color: ["blackAlpha.600", "whiteAlpha.700"],
      },
    },

    sizes: {
      xs: {
        stepper: {
          _first: {
            borderTopEndRadius: "sm",
          },
          _last: {
            borderBottomEndRadius: "sm",
          },
          fontSize: "xs",
        },
      },
      sm: {
        stepper: {
          _first: {
            borderTopEndRadius: "md",
          },
          _last: {
            borderBottomEndRadius: "md",
          },
          fontSize: "sm",
        },
      },
      md: {
        stepper: {
          _first: {
            borderTopEndRadius: "md",
          },
          _last: {
            borderBottomEndRadius: "md",
          },
          fontSize: "md",
        },
      },
      lg: {
        stepper: {
          _first: {
            borderTopEndRadius: "md",
          },
          _last: {
            borderBottomEndRadius: "md",
          },
          fontSize: "lg",
        },
      },
    },

    variants: {
      flushed: {
        stepper: {
          _active: {
            bg: "transparent",
            opacity: 0.7,
          },
          _hover: {
            bg: "transparent",
            opacity: 0.8,
          },
          _last: {
            border: "none",
          },
          bg: "transparent",
          border: "none",
        },
      },
      unstyled: {
        stepper: {
          _active: {
            bg: "transparent",
          },
          _hover: {
            bg: "transparent",
          },
          _last: {
            border: "none",
          },
          bg: "transparent",
          border: "none",
        },
      },
    },
  },
)({ omit: ["addon"] })
