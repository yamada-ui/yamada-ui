import type { ComponentMultiStyle } from "@yamada-ui/react"
import { shadeColor, tintColor } from "@yamada-ui/react"

export const Alert: ComponentMultiStyle = {
  variants: {
    note: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
      container: {
        bg: [
          tintColor(`${c}.100`, 0.12)(t, m),
          shadeColor(`${c}.200`, 76)(t, m),
        ],
      },
      icon: { color: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`] },
      loading: { color: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`] },
    }),
  },
}
