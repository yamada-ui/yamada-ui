import type { ThemeProps } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import { createContext } from "@yamada-ui/utils"
import type { ChangeEvent } from "react"

export interface CheckboxGroupContext
  extends ThemeProps<"Checkbox">,
    FormControlOptions {
  value: (string | number)[]
  onChange: (evOrValue: ChangeEvent<HTMLInputElement> | string | number) => void
}

export const [CheckboxGroupProvider, useCheckboxGroupContext] = createContext<
  CheckboxGroupContext | undefined
>({
  strict: false,
  name: "CheckboxGroupContext",
})
