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

export const passwordInputStyle = defineComponentSlotStyle({
  base: {
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
    icon: {
      alignItems: "center",
      color: ["blackAlpha.600", "whiteAlpha.700"],
      cursor: "pointer",
      display: "inline-flex",
      justifyContent: "center",
      outline: 0,
      position: "absolute",
      rounded: "md",
      top: "50%",
      transform: "translateY(-50%)",
      transitionDuration: "moderate",
      transitionProperty: "common",
      zIndex: "yamcha",
      _hover: {
        opacity: 0.8,
      },
      _readOnly: {
        pointerEvents: "none",
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
    },
    root: {
      h: "fit-content",
      position: "relative",
      w: "100%",
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
    unstyled: {},
  },

  sizes: {
    xs: {
      field: {
        fontSize: "xs",
        pe: "7",
        px: "2",
        ...getInputHeightStyle("{sizes.8}"),
      },
      icon: {
        fontSize: "sm",
        insetEnd: "1",
      },
    },
    sm: {
      field: {
        fontSize: "sm",
        pe: "8",
        px: "2.5",
        ...getInputHeightStyle("{sizes.9}"),
      },
      icon: {
        fontSize: "xl",
        insetEnd: "1.5",
      },
    },
    md: {
      field: {
        fontSize: "md",
        pe: "9",
        px: "3",
        ...getInputHeightStyle("{sizes.10}"),
      },
      icon: {
        fontSize: "xl",
        insetEnd: "2",
      },
    },
    lg: {
      field: {
        fontSize: "lg",
        pe: "10",
        px: "3.5",
        ...getInputHeightStyle("{sizes.11}"),
      },
      icon: {
        fontSize: "2xl",
        insetEnd: "2",
      },
    },
    xl: {
      field: {
        fontSize: "xl",
        pe: "11",
        px: "4",
        ...getInputHeightStyle("{sizes.12}"),
      },
      icon: {
        fontSize: "3xl",
        insetEnd: "3",
      },
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

export type PasswordInputStyle = typeof passwordInputStyle
