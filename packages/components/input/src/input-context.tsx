import type { CSSUIObject } from "@yamada-ui/core"
import { createContext } from "@yamada-ui/utils"

interface InputGroupContext {
  fieldFontSize: string | undefined
  fieldHeight: string | undefined
  styles: { [key: string]: CSSUIObject }
}

export const [InputGroupProvider, useInputGroup] =
  createContext<InputGroupContext>({
    name: "InputGroupContext",
    errorMessage: `useInputGroup returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `,
  })
