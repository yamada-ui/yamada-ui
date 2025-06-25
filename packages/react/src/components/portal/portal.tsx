"use client"

import type { PropsWithChildren, RefObject } from "react"
import type { FC } from "../../core"
import type { RootNode } from "../../core"
import { Children, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { useEnvironment } from "../../core"
import { getDocument, isShadowRoot, useSsr } from "../../utils"

const getPortalNode = (node: RootNode) => {
  const rootNode = node.getRootNode()

  if (isShadowRoot(rootNode)) return rootNode

  return getDocument(node).body
}

export interface PortalProps extends PropsWithChildren {
  /**
   * The `ref` to the component where the portal will be attached to.
   */
  containerRef?: RefObject<HTMLElement | null>
  /**
   * If `true`, the forwarding will be disabled.
   */
  disabled?: boolean
}

/**
 * `Portal` is a component that renders elements outside of the current `DOM` hierarchy.
 *
 * @see https://yamada-ui.com/components/portal
 */
export const Portal: FC<PortalProps> = ({
  children,
  containerRef: ref,
  disabled,
}) => {
  const [target, setTarget] = useState(ref?.current)
  const ssr = useSsr()
  const { getRootNode } = useEnvironment()

  useEffect(() => {
    setTarget(() => ref?.current)
  }, [ref])

  if (ssr || disabled) return children

  const container = target ?? getPortalNode(getRootNode())

  return (
    <>{Children.map(children, (child) => createPortal(child, container))}</>
  )
}
