import { createContext } from "../../utils"

type PortalContext = HTMLDivElement | null

export const [PortalProvider, usePortal] = createContext<PortalContext>({
  name: "PortalContext",
  strict: false,
})
