import type { ComponentStyle } from "@yamada-ui/core"

export const AudioPlayer: ComponentStyle = {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    gap: "0.5rem",
    borderRadius: "md",
    backgroundColor: "gray.100",
    color: "gray.800",
    border: "1px solid",
    borderColor: "transparent",
    _loading: {
      cursor: "not-allowed",
      opacity: 0.8,
    },
    _readOnly: {
      cursor: "not-allowed",
      opacity: 0.8,
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.8,
    },
  },

  variants: {},

  sizes: {},

  defaultProps: {},
}
