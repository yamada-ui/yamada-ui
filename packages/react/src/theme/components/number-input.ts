import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { Input } from "./input"

export const NumberInput: ComponentMultiStyle<"NumberInput"> = mergeMultiStyle(
  Input,
  {
    baseStyle: {
      addon: {
        display: "flex",
        flexDirection: "column",
        height: "calc(100% - 2px)",
        insetEnd: "0px",
        margin: "1px",
        position: "absolute",
        top: "0",
        zIndex: "yamcha",
      },
      container: {
        position: "relative",
        zIndex: 0,
      },
      stepper: {
        borderColor: "inherit",
        borderStartWidth: "1px",
        borderStyle: "solid",
        color: ["blackAlpha.600", "whiteAlpha.700"],
        field: {
          width: "100%",
        },
        _last: {
          borderColor: "inherit",
          borderStartWidth: "1px",
          borderTopWidth: "1px",
          mt: "-1px",
        },
        _hover: {
          bg: ["blackAlpha.100", "whiteAlpha.100"],
        },
        _active: {
          bg: ["blackAlpha.200", "whiteAlpha.200"],
        },
        _readOnly: { cursor: "auto" },
        _disabled: {
          cursor: "not-allowed",
          opacity: 0.4,
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
          _last: {
            border: "none",
          },
          _hover: {
            bg: "transparent",
            opacity: 0.8,
          },
          _active: {
            bg: "transparent",
            opacity: 0.7,
          },
        },
      },
      unstyled: {
        stepper: {
          bg: "transparent",
          border: "none",
          _last: {
            border: "none",
          },
          _hover: {
            bg: "transparent",
          },
          _active: {
            bg: "transparent",
          },
        },
      },
    },
  },
)({ omit: ["addon"] })
