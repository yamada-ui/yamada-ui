import type { CSSUIObject } from "../../core"
import { createContext } from "../../utils"

interface InputGroupContext {
  fieldFontSize: string | undefined
  fieldHeight: string | undefined
  styles: { [key: string]: CSSUIObject | undefined }
}

export const [InputGroupContext, useInputGroup] =
  createContext<InputGroupContext>({
    name: "InputGroupContext",
    errorMessage: `useInputGroup returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `,
  })
