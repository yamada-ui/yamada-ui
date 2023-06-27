import { useSafeLayoutEffect } from '@yamada-ui/utils'
import { FC, useMemo, useState, PropsWithChildren, RefObject } from 'react'
import { createPortal } from 'react-dom'
import { PortalProvider } from './portal-provider'

type ContainerPortalProps = PropsWithChildren & {
  containerRef: RefObject<HTMLElement | null>
  appendToParentPortal?: boolean
}

export const ContainerPortal: FC<ContainerPortalProps> = ({
  children,
  containerRef,
  appendToParentPortal,
}) => {
  const parent = containerRef.current
  const host = parent ?? (typeof window !== 'undefined' ? document.body : undefined)

  const portal = useMemo(() => {
    if (!parent) return

    const { ownerDocument } = parent

    const node = ownerDocument.createElement('div')

    if (node) node.className = 'ui-portal'

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
        <PortalProvider value={appendToParentPortal ? portal : null}>{children}</PortalProvider>,
        portal,
      )
    : null
}
