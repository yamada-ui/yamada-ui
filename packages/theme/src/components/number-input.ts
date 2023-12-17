import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Input } from "./input"

export const NumberInput: ComponentMultiStyle = mergeMultiStyle(Input, {
  baseStyle: {
    stepper: {
      borderStart: "1px solid",
      borderColor: "inherit",
      color: ["blackAlpha.600", "whiteAlpha.700"],
      _hover: {
        bg: ["blackAlpha.100", "whiteAlpha.100"],
      },
      _active: {
        bg: ["blackAlpha.200", "whiteAlpha.200"],
      },
      _readOnly: { cursor: "auto" },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
  },

  variants: {
    flushed: {
      stepper: {
        bg: "transparent",
        border: "none",
        _hover: {
          bg: "transparent",
          opacity: 0.8,
        },
        _active: {
          bg: "transparent",
          opacity: 0.7,
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
        _hover: {
          bg: "transparent",
        },
        _active: {
          bg: "transparent",
        },
        _last: {
          border: "none",
        },
      },
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
          mt: "-1px",
          borderTop: "1px solid",
          borderColor: "inherit",
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
          mt: "-1px",
          borderTop: "1px solid",
          borderColor: "inherit",
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
          mt: "-1px",
          borderTop: "1px solid",
          borderColor: "inherit",
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
          mt: "-1px",
          borderTop: "1px solid",
          borderColor: "inherit",
        },
      },
    },
  },
})({ omit: ["addon"] })
