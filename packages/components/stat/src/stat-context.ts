import type { CSSUIObject } from "@yamada-ui/core"
import { createContext } from "@yamada-ui/utils"

interface StatContext {
  [key: string]: CSSUIObject | undefined
}

export const [StatProvider, useStat] = createContext<StatContext>({
  name: "StatContext",
  errorMessage: `useStat returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />"`,
})
