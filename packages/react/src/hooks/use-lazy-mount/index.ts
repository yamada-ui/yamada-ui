"use client"

import type { ReactNode } from "react"
import { useRef } from "react"

export type LazyBehavior = "keepMounted" | "unmount"

export interface UseLazyMountProps {
  children?: ReactNode
  /**
   * If `true`, rendering of the content will be deferred until it is selected.
   *
   * @default false
   */
  lazy?: boolean
  /**
   * The lazy behavior of content when not active. Only works when `lazy={true}`.
   *
   * - `unmount`: The content is always unmounted.
   * - `keepMounted`: The content is initially unmounted, but stays mounted when selected.
   *
   * @default 'unmount'
   */
  lazyBehavior?: LazyBehavior
  /**
   * If `true`, the content is mounted.
   *
   * @default false
   */
  mounted?: boolean
}

export const useLazyMount = ({
  children,
  lazy,
  lazyBehavior = "unmount",
  mounted,
}: UseLazyMountProps): ReactNode => {
  const beforeMounted = useRef<boolean>(false)

  if (!lazy) {
    beforeMounted.current = false

    return children
  }

  if (mounted) {
    beforeMounted.current = true

    return children
  }

  if (lazyBehavior === "keepMounted" && beforeMounted.current) return children

  return null
}
