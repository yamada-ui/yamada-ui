import type { FC, PropsWithChildren, RefObject } from "react"
import { useSafeLayoutEffect } from "@yamada-ui/utils"
import { useMemo, useState } from "react"
import { createPortal } from "react-dom"
import { PortalProvider } from "./portal-provider"

interface ContainerPortalProps extends PropsWithChildren {
  containerRef: RefObject<HTMLElement | null>
  appendToParentPortal?: boolean
}

export const ContainerPortal: FC<ContainerPortalProps> = ({
  appendToParentPortal,
  children,
  containerRef,
}) => {
  const parent = containerRef.current
  const host =
    parent ?? (typeof window !== "undefined" ? document.body : undefined)

  const portal = useMemo(() => {
    if (!parent) return

    const { ownerDocument } = parent

    const node = ownerDocument.createElement("div")

    node.className = "ui-portal"

    return node
  }, [parent])

  const [, forceUpdate] = useState({})

  useSafeLayoutEffect(() => forceUpdate({}), [])

  useSafeLayoutEffect(() => {
    if (!portal || !host) return

    host.appendChild(portal)

    return () => {
      host.removeChild(portal)
    }
  }, [portal, host])

  return host && portal
    ? createPortal(
        <PortalProvider value={appendToParentPortal ? portal : null}>
          {children}
        </PortalProvider>,
        portal,
      )
    : null
}
