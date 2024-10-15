import { createContext } from "@yamada-ui/utils"

type PortalContext = HTMLDivElement | null

export const [PortalProvider, usePortal] = createContext<PortalContext>({
  name: "PortalContext",
  strict: false,
})
