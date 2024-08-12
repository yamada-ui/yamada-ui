import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Select } from "./select"

export const Autocomplete: ComponentMultiStyle<"Autocomplete"> =
  mergeMultiStyle(Select, {
    baseStyle: {
      container: {
        w: "100%",
        h: "fit-content",
      },
      inner: {
        position: "relative",
      },
      field: {
        pe: "2rem",
        display: "flex",
        alignItems: "center",
        cursor: "text",
      },
      item: {
        textDecoration: "none",
        color: "inherit",
        userSelect: "none",
        display: "flex",
        width: "100%",
        alignItems: "center",
        textAlign: "start",
        flex: "0 0 auto",
        outline: 0,
        gap: "0.75rem",
      },
      icon: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        cursor: "pointer",
      },
      itemIcon: {
        flexShrink: 0,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "0.85em",
      },
    },
  })()
