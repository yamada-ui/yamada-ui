"use client"

import type { DataAttributes, FC, PropsWithChildren, RefObject } from "react"
import type { RootNode } from "../../core"
import { Children, useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { useEnvironment } from "../../core"
import {
  createContext,
  getDocument,
  isEmptyObject,
  isShadowRoot,
  useSsr,
} from "../../utils"
import { useFocusLockShard } from "../focus-lock"

export const [PortalContext, usePortalContext] = createContext<DataAttributes>({
  strict: false,
})

export interface PortalProviderProps extends PropsWithChildren {
  value: DataAttributes
}

export const PortalProvider: FC<PortalProviderProps> = ({
  children,
  value,
}) => {
  const prevContext = usePortalContext()
  const context = useMemo(() => {
    return { ...prevContext, ...value }
  }, [prevContext, value])

  return <PortalContext value={context}>{children}</PortalContext>
}

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
  const props = usePortalContext()
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
    return createPortal(
      <div ref={shardRef} {...props}>
        {children}
      </div>,
      container,
    )

  const scoped = props && !isEmptyObject(props)

  return (
    <>
      {Children.map(children, (child) => {
        if (child == null) return null

        return createPortal(
          scoped ? (
            <div style={{ display: "contents" }} {...props}>
              {child}
            </div>
          ) : (
            child
          ),
          container,
        )
      })}
    </>
  )
}
