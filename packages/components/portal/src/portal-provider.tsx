import { createContext } from '@yamada-ui/utils'

type PortalContext = HTMLDivElement | null

export const [PortalProvider, usePortal] = createContext<PortalContext>({
  strict: false,
  name: 'PortalContext',
})
