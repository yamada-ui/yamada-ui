import type { ComponentMultiStyle } from "@yamada-ui/core"
import { isGray, shadeColor } from "@yamada-ui/utils"

export const Switch: ComponentMultiStyle = {
  baseStyle: {
    container: {
      cursor: "pointer",
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      verticalAlign: "top",
      _readOnly: { cursor: "auto" },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
    track: {
      boxSizing: "content-box",
      display: "inline-flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexShrink: 0,
      rounded: "full",
      bg: ["blackAlpha.400", "whiteAlpha.300"],
      transitionProperty: "common",
      transitionDuration: "fast",
      _checked: {
        justifyContent: "flex-end",
      },
      _focusVisible: {
        boxShadow: "outline",
      },
    },
    thumb: {
      rounded: "inherit",
      bg: "white",
    },
    label: {
      userSelect: "none",
    },
  },

  variants: {
    thick: ({ colorScheme: c = "primary" }) => ({
      track: {
        p: "1",
        _checked: {
          bg: [`${c}.500`, `${c}.600`],
        },
      },
    }),
    thin: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({
      track: {
        _checked: {
          bg: [
            isGray(c) ? `${c}.50` : `${c}.100`,
            shadeColor(`${c}.300`, 58)(t, m),
          ],
        },
      },
      thumb: {
        boxShadow: "dark-md",
        _checked: {
          bg: [`${c}.500`, `${c}.600`],
        },
      },
    }),
  },

  sizes: {
    sm: ({ variant: v }) => ({
      track: {
        w: "6",
        h: v === "thin" ? "2" : undefined,
      },
      thumb: {
        w: "3",
        h: "3",
      },
      label: { fontSize: "sm" },
    }),
    md: ({ variant: v }) => ({
      track: {
        w: "8",
        h: v === "thin" ? "3" : undefined,
      },
      thumb: {
        w: "4",
        h: "4",
      },
      label: { fontSize: "md" },
    }),
    lg: ({ variant: v }) => ({
      track: {
        w: "10",
        h: v === "thin" ? "4" : undefined,
      },
      thumb: {
        w: "5",
        h: "5",
      },
      label: { fontSize: "lg" },
    }),
  },

  defaultProps: {
    size: "md",
    variant: "thick",
    colorScheme: "primary",
  },
}
