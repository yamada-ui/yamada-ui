import type { ComponentMultiStyle } from "@yamada-ui/react"
import { shadeColor, tintColor } from "@yamada-ui/react"

export const Alert: ComponentMultiStyle = {
  variants: {
    note: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({
      container: {
        bg: [
          tintColor(`${c}.100`, 0.12)(t, m),
          shadeColor(`${c}.200`, 76)(t, m),
        ],
      },
      icon: { color: [`${c}.400`, `${c}.200`] },
      loading: { color: [`${c}.400`, `${c}.200`] },
    }),
  },

  defaultProps: {
    variant: "note",
    colorScheme: "primary",
  },
}
