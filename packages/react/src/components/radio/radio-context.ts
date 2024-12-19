import type { ChangeEvent } from "react"
import type {
  CSSUIObject,
  HTMLUIProps,
  PropGetter,
  ThemeProps,
} from "../../core"
import type { FormControlOptions } from "../form-control"
import type { RadioCardProps } from "./radio-card"
import { createContext } from "../../utils"

interface RadioGroupSharedContext extends FormControlOptions {
  name: string
  value: number | string
  onChange: (evOrValue: ChangeEvent<HTMLInputElement> | number | string) => void
}

export interface RadioGroupContext
  extends RadioGroupSharedContext,
    ThemeProps<"Radio"> {}

export const [RadioGroupProvider, useRadioGroupContext] =
  createContext<RadioGroupContext>({
    name: "RadioGroupContext",
    strict: false,
  })

export interface RadioCardGroupContext
  extends RadioGroupSharedContext,
    Pick<
      RadioCardProps,
      "addonProps" | "descriptionProps" | "labelProps" | "withIcon"
    >,
    ThemeProps<"RadioCard"> {}

export const [RadioCardGroupProvider, useRadioCardGroupContext] =
  createContext<RadioCardGroupContext>({
    name: "RadioCardGroupContext",
    strict: false,
  })

export interface RadioCardContext {
  styles: { [key: string]: CSSUIObject | undefined }
  withIcon: boolean
  getIconProps: PropGetter
  iconProps?: HTMLUIProps
}

export const [RadioCardProvider, useRadioCardContext] =
  createContext<RadioCardContext>({
    name: "RadioCardContext",
    errorMessage: `useRadioCardContext returned is 'undefined'. Seems you forgot to wrap the components in "<RadioCard />"`,
  })
