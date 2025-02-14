import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { Input } from "./input"

export const PasswordInput: ComponentMultiStyle<"PasswordInput"> =
  mergeMultiStyle(Input, {
    baseStyle: {
      container: {
        h: "fit-content",
        position: "relative",
        w: "100%",
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
        _disabled: {
          cursor: "not-allowed",
          opacity: 0.4,
        },
        _focusVisible: {
          boxShadow: "outline",
        },
        _hover: {
          opacity: 0.8,
        },
        _readOnly: {
          pointerEvents: "none",
        },
      },
      strengthMeter: {
        alignItems: "end",
        display: "flex",
        flexDirection: "column",
        gap: "xs",
        w: "full",
      },
      strengthMeterIndicator: {
        bg: "$bg",
        flex: "1",
        h: "1",
        rounded: "sm",
        vars: [
          {
            name: "bg",
            token: "colors",
            value: ["blackAlpha.200", "whiteAlpha.200"],
          },
        ],
      },
      strengthMeterIndicators: {
        display: "flex",
        gap: "sm",
        transitionDuration: "moderate",
        transitionProperty: "common",
        w: "full",
      },
      strengthMeterLabel: {
        fontSize: "xs",
      },
    },

    sizes: {
      xs: {
        field: {
          pe: "7",
        },
        icon: {
          fontSize: "sm",
          insetEnd: "1",
        },
      },
      sm: {
        field: {
          pe: "8",
        },
        icon: {
          fontSize: "xl",
          insetEnd: "1.5",
        },
      },
      md: {
        field: {
          pe: "9",
        },
        icon: {
          fontSize: "xl",
          insetEnd: "2",
        },
      },
      lg: {
        field: {
          pe: "10",
        },
        icon: {
          fontSize: "2xl",
          insetEnd: "2",
        },
      },
      xl: {
        field: {
          pe: "11",
        },
        icon: {
          fontSize: "3xl",
          insetEnd: "3",
        },
      },
    },
  })({ omit: ["addon", "element"] })
