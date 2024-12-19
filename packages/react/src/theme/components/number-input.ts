import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { Input } from "./input"

export const NumberInput: ComponentMultiStyle<"NumberInput"> = mergeMultiStyle(
  Input,
  {
    baseStyle: {
      stepper: {
        borderColor: "inherit",
        borderStartWidth: "1px",
        borderStyle: "solid",
        color: ["blackAlpha.600", "whiteAlpha.700"],
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
      },
    },

    sizes: {
      xs: {
        stepper: {
          fontSize: "xs",
          _first: {
            borderTopEndRadius: "sm",
          },
          _last: {
            borderBottomEndRadius: "sm",
          },
        },
      },
      sm: {
        stepper: {
          fontSize: "sm",
          _first: {
            borderTopEndRadius: "md",
          },
          _last: {
            borderBottomEndRadius: "md",
          },
        },
      },
      md: {
        stepper: {
          fontSize: "md",
          _first: {
            borderTopEndRadius: "md",
          },
          _last: {
            borderBottomEndRadius: "md",
          },
        },
      },
      lg: {
        stepper: {
          fontSize: "lg",
          _first: {
            borderTopEndRadius: "md",
          },
          _last: {
            borderBottomEndRadius: "md",
          },
        },
      },
    },

    variants: {
      flushed: {
        stepper: {
          bg: "transparent",
          border: "none",
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
        },
      },
      unstyled: {
        stepper: {
          bg: "transparent",
          border: "none",
          _active: {
            bg: "transparent",
          },
          _hover: {
            bg: "transparent",
          },
          _last: {
            border: "none",
          },
        },
      },
    },
  },
)({ omit: ["addon"] })
