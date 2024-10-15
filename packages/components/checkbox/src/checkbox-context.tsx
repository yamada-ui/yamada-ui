import type { ThemeProps } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { ChangeEvent } from "react"
import { createContext } from "@yamada-ui/utils"

export interface CheckboxGroupContext
  extends ThemeProps<"Checkbox">,
    FormControlOptions {
  value: (number | string)[]
  onChange: (evOrValue: ChangeEvent<HTMLInputElement> | number | string) => void
}

export const [CheckboxGroupProvider, useCheckboxGroupContext] = createContext<
  CheckboxGroupContext | undefined
>({
  name: "CheckboxGroupContext",
  strict: false,
})
