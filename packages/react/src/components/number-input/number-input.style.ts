import { defineComponentSlotStyle } from "../../core"

const getInputHeightStyle = (height: string) => ({
  "&:has(+ [data-input-element])": {
    pe: height,
  },
  "& ~ [data-input-element]": {
    minW: height,
  },
  "[data-input-element] + &": {
    ps: height,
  },
  "[data-input-element]:has(~ &)": {
    minW: height,
  },
  minH: height,
})

export const numberInputStyle = defineComponentSlotStyle({
  base: {
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
    field: {
      appearance: "none",
      minW: "0",
      position: "relative",
      rounded: "l2",
      textAlign: "start",
      transitionDuration: "moderate",
      transitionProperty: "common",
      vars: [
        {
          name: "focusBorderColor",
          token: "colors",
          value: "colorScheme.outline",
        },
        {
          name: "errorBorderColor",
          token: "colors",
          value: "border.error",
        },
      ],
      w: "full",
      _disabled: {
        layerStyle: "disabled",
      },
    },
    root: {
      position: "relative",
      zIndex: 0,
    },
    stepper: {
      alignItems: "center",
      borderColor: "inherit",
      borderStartWidth: "1px",
      borderStyle: "solid",
      color: ["blackAlpha.600", "whiteAlpha.700"],
      cursor: "pointer",
      display: "flex",
      field: {
        width: "100%",
      },
      flex: 1,
      justifyContent: "center",
      lineHeight: "moderate",
      transitionDuration: "moderate",
      transitionProperty: "common",
      userSelect: "none",
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

  variants: {
    filled: {
      field: {
        bg: "bg.panel",
        borderColor: "transparent",
        borderWidth: "1px",
        focusRingColor: "{focusBorderColor}",
        focusVisibleRing: "inside",
        _invalid: {
          borderColor: "{errorBorderColor}",
          focusRingColor: "{errorBorderColor}",
        },
      },
    },
    flushed: {
      field: {
        bg: "transparent",
        borderBottomColor: "colorScheme.muted",
        borderBottomWidth: "1px",
        borderRadius: "0",
        px: "0",
        _invalid: {
          borderColor: "{errorBorderColor}",
          _focusVisible: {
            boxShadow: "0px 1px 0px 0px {errorBorderColor}",
          },
        },
        _focusVisible: {
          borderColor: "{focusBorderColor}",
          boxShadow: "0px 1px 0px 0px {focusBorderColor}",
          outline: "none",
        },
      },
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
        _readOnly: {
          cursor: "not-allowed",
        },
      },
    },
    outline: {
      field: {
        borderColor: "colorScheme.muted",
        borderWidth: "1px",
        focusRingColor: "{focusBorderColor}",
        focusVisibleRing: "inside",
        _invalid: {
          borderColor: "{errorBorderColor}",
          focusRingColor: "{errorBorderColor}",
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

  sizes: {
    xs: {
      field: {
        fontSize: "xs",
        px: "2",
        ...getInputHeightStyle("{sizes.8}"),
      },
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
      field: {
        fontSize: "sm",
        px: "2.5",
        ...getInputHeightStyle("{sizes.9}"),
      },
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
      field: {
        fontSize: "md",
        px: "3",
        ...getInputHeightStyle("{sizes.10}"),
      },
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
      field: {
        fontSize: "lg",
        px: "3.5",
        ...getInputHeightStyle("{sizes.11}"),
      },
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
    xl: {
      field: { fontSize: "xl", px: "4", ...getInputHeightStyle("{sizes.12}") },
    },
    "2xl": {
      field: { fontSize: "xl", px: "4", ...getInputHeightStyle("{sizes.14}") },
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type NumberInputStyle = typeof numberInputStyle
