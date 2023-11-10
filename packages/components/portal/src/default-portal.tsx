import { useSafeLayoutEffect } from "@yamada-ui/utils"
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { PortalProvider, usePortal } from "./portal-provider"

export const DefaultPortal: FC<
  PropsWithChildren<{ appendToParentPortal: boolean }>
> = ({ appendToParentPortal, children }) => {
  const [node, setNode] = useState<HTMLElement | null>(null)
  const el = useRef<HTMLDivElement | null>(null)

  const [, forceUpdate] = useState({})

  useEffect(() => forceUpdate({}), [])

  const parent = usePortal()

  useSafeLayoutEffect(() => {
    if (!node) return

    const { ownerDocument } = node
    const host = appendToParentPortal
      ? parent ?? ownerDocument.body
      : ownerDocument.body

    if (!host) return

    el.current = ownerDocument.createElement("div")
    el.current.className = "ui-portal"

    host.appendChild(el.current)
    forceUpdate({})

    const portalNode = el.current

    return () => {
      if (host.contains(portalNode)) host.removeChild(portalNode)
    }
  }, [node])

  return el.current ? (
    createPortal(
      <PortalProvider value={el.current}>{children}</PortalProvider>,
      el.current,
    )
  ) : (
    <span ref={(el) => (el ? setNode(el) : undefined)} />
  )
}
