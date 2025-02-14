import type { CSSUIObject } from "../../core"
import { createContext } from "../../utils"

interface StatContext {
  [key: string]: CSSUIObject | undefined
}

export const [StatContext, useStat] = createContext<StatContext>({
  name: "StatContext",
  errorMessage: `useStat returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />"`,
})
