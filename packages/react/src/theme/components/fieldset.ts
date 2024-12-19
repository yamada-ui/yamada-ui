import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { FormControl } from "./form-control"

export const Fieldset: ComponentMultiStyle<"Fieldset"> = mergeMultiStyle(
  FormControl,
  {
    baseStyle: {
      legend: {
        display: "block",
        fontSize: "md",
        fontWeight: "medium",
        mb: "2",
        me: "3",
        opacity: 1,
        transitionDuration: "normal",
        transitionProperty: "common",
        _disabled: {
          opacity: 0.4,
        },
      },
    },
  },
)({ omit: ["label"] })
