"use client"

import type { FC, PropsWithChildren, RefObject } from "react"
import type { RootNode } from "../../core"
import { Children, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { useEnvironment } from "../../core"
import { getDocument, isShadowRoot, useSsr } from "../../utils"
import { useFocusLockShard } from "../focus-lock"

const getPortalNode = (node?: RootNode) => {
  const rootNode = node?.getRootNode()

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
 * @see https://yamada-ui.com/docs/components/portal
 */
export const Portal: FC<PortalProps> = ({
  children,
  containerRef: ref,
  disabled,
}) => {
  const shardRef = useRef<HTMLDivElement>(null)
  const [target, setTarget] = useState(ref?.current)
  const ssr = useSsr()
  const { getRootNode } = useEnvironment()
  const registerShard = useFocusLockShard()

  useEffect(() => {
    setTarget(() => ref?.current)
  }, [ref])

  useEffect(() => {
    const shard = shardRef.current

    if (disabled || ssr || !shard) return

    return registerShard?.(shard)
  }, [disabled, registerShard, ssr])

  if (ssr || disabled) return children

  const container = target ?? getPortalNode(getRootNode())

  if (registerShard)
    return createPortal(<div ref={shardRef}>{children}</div>, container)

  return (
    <>{Children.map(children, (child) => createPortal(child, container))}</>
  )
}
