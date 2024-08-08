import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { FormControl } from "./form-control"

export const Fieldset: ComponentMultiStyle<"Fieldset"> = mergeMultiStyle(
  FormControl,
  {
    baseStyle: {
      legend: {
        display: "block",
        fontSize: "md",
        me: "3",
        mb: "2",
        fontWeight: "medium",
        transitionProperty: "common",
        transitionDuration: "normal",
        opacity: 1,
        _disabled: {
          opacity: 0.4,
        },
      },
    },
  },
)({ omit: ["label"] })
