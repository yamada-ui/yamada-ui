import type { ThemeProps } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import { createContext } from "@yamada-ui/utils"
import type { ChangeEvent } from "react"

export interface RadioGroupContext
  extends ThemeProps<"Radio">,
    FormControlOptions {
  name: string
  value: string | number
  onChange: (evOrValue: ChangeEvent<HTMLInputElement> | string | number) => void
}

export const [RadioGroupProvider, useRadioGroupContext] = createContext<
  RadioGroupContext | undefined
>({
  strict: false,
  name: "RadioGroupContext",
})
