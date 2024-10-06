import type { ComponentMultiStyle } from "@yamada-ui/core"
import { isGray, shadeColor } from "@yamada-ui/utils"

export const Switch: ComponentMultiStyle<"Switch"> = {
  baseStyle: {
    container: {
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
      _readOnly: { cursor: "auto" },
    },
    label: {
      userSelect: "none",
    },
    thumb: {
      bg: "white",
      rounded: "inherit",
    },
    track: {
      _checked: {
        justifyContent: "flex-end",
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      bg: ["blackAlpha.400", "whiteAlpha.300"],
      rounded: "full",
      transitionDuration: "fast",
      transitionProperty: "common",
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
    thin: ({ colorMode: m, colorScheme: c = "primary", theme: t }) => ({
      thumb: {
        _checked: {
          bg: [`${c}.500`, `${c}.600`],
        },
        boxShadow: "dark-md",
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
        _checked: {
          bg: [`${c}.500`, `${c}.600`],
        },
        p: "1",
      },
    }),
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
    variant: "thick",
  },
}
