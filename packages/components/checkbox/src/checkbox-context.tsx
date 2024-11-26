import type {
  CSSUIObject,
  HTMLUIProps,
  PropGetter,
  ThemeProps,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { ChangeEvent, ReactElement } from "react"
import type { CheckboxCardProps } from "./checkbox-card"
import { createContext } from "@yamada-ui/utils"

interface CheckboxGroupSharedContext extends FormControlOptions {
  value: (number | string)[]
  onChange: (evOrValue: ChangeEvent<HTMLInputElement> | number | string) => void
}

export interface CheckboxGroupContext
  extends CheckboxGroupSharedContext,
    ThemeProps<"Checkbox">,
    FormControlOptions {}

export const [CheckboxGroupProvider, useCheckboxGroupContext] =
  createContext<CheckboxGroupContext>({
    name: "CheckboxGroupContext",
    strict: false,
  })

export interface CheckboxCardGroupContext
  extends CheckboxGroupSharedContext,
    Pick<
      CheckboxCardProps,
      "addonProps" | "descriptionProps" | "labelProps" | "withIcon"
    >,
    ThemeProps<"CheckboxCard"> {}

export const [CheckboxCardGroupProvider, useCheckboxCardGroupContext] =
  createContext<CheckboxCardGroupContext>({
    name: "CheckboxCardGroupContext",
    strict: false,
  })

export interface CheckboxCardContext {
  icon: ReactElement
  styles: { [key: string]: CSSUIObject | undefined }
  withIcon: boolean
  getIconProps: PropGetter
  iconProps?: HTMLUIProps
}

export const [CheckboxCardProvider, useCheckboxCardContext] =
  createContext<CheckboxCardContext>({
    name: "CheckboxCardContext",
    errorMessage: `useCheckboxCardContext returned is 'undefined'. Seems you forgot to wrap the components in "<CheckboxCard />"`,
  })
