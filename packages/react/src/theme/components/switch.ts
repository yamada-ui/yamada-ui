import type { ComponentMultiStyle } from "../../core"
import { isGray, shadeColor } from "../../utils"

export const Switch: ComponentMultiStyle<"Switch"> = {
  baseStyle: {
    container: {
      alignItems: "center",
      cursor: "pointer",
      display: "inline-flex",
      position: "relative",
      verticalAlign: "top",
      _readOnly: { cursor: "auto" },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
    },
    label: {
      userSelect: "none",
    },
    thumb: {
      bg: "white",
      rounded: "inherit",
    },
    track: {
      alignItems: "center",
      bg: ["blackAlpha.400", "whiteAlpha.300"],
      boxSizing: "content-box",
      display: "inline-flex",
      flexShrink: 0,
      justifyContent: "flex-start",
      rounded: "full",
      transitionDuration: "fast",
      transitionProperty: "common",
      _checked: {
        justifyContent: "flex-end",
      },
      _focusVisible: {
        boxShadow: "outline",
      },
    },
  },

  sizes: {
    sm: ({ variant: v }) => ({
      label: { fontSize: "sm" },
      thumb: {
        h: "3",
        w: "3",
      },
      track: {
        h: v === "thin" ? "2" : undefined,
        w: "6",
      },
    }),
    md: ({ variant: v }) => ({
      label: { fontSize: "md" },
      thumb: {
        h: "4",
        w: "4",
      },
      track: {
        h: v === "thin" ? "3" : undefined,
        w: "8",
      },
    }),
    lg: ({ variant: v }) => ({
      label: { fontSize: "lg" },
      thumb: {
        h: "5",
        w: "5",
      },
      track: {
        h: v === "thin" ? "4" : undefined,
        w: "10",
      },
    }),
  },

  variants: {
    thin: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
      thumb: {
        boxShadow: "dark-md",
        _checked: {
          bg: [`${c}.500`, `${c}.600`],
        },
      },
      track: {
        _checked: {
          bg: [
            isGray(c) ? `${c}.50` : `${c}.100`,
            shadeColor(`${c}.300`, 58)(t, m),
          ],
        },
      },
    }),
    thick: ({ colorScheme: c = "primary" }) => ({
      track: {
        p: "1",
        _checked: {
          bg: [`${c}.500`, `${c}.600`],
        },
      },
    }),
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
    variant: "thick",
  },
}
