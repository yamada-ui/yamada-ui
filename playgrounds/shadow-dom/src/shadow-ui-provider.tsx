import type { PropsWithChildren } from "react"
import { UIProvider } from "@yamada-ui/react"
import { useState } from "react"
import root from "react-shadow/emotion"

const Root = root.div!

export interface ShadowUIProviderProps extends PropsWithChildren {}

export function ShadowUIProvider({ children }: ShadowUIProviderProps) {
  const [ref, setRef] = useState<HTMLElement | null>(null)

  return (
    <Root ref={setRef}>
      {ref ? (
        <UIProvider rootNode={() => ref.shadowRoot ?? document}>
          {children}
        </UIProvider>
      ) : null}
    </Root>
  )
}
