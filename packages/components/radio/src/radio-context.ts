import type { ThemeProps } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { ChangeEvent } from "react"
import { createContext } from "@yamada-ui/utils"

export interface RadioGroupContext
  extends ThemeProps<"Radio">,
    FormControlOptions {
  name: string
  value: number | string
  onChange: (evOrValue: ChangeEvent<HTMLInputElement> | number | string) => void
}

export const [RadioGroupProvider, useRadioGroupContext] = createContext<
  RadioGroupContext | undefined
>({
  name: "RadioGroupContext",
  strict: false,
})
