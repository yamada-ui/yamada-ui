"use client"

import type { FC, ReactNode } from "react"
import type { ReactNodeOrFunction } from "../../utils"
import { useMounted } from "../../hooks/use-mounted"
import { Show } from "../show"

export interface ClientOnlyProps {
  /**
   * The content to render on the client side.
   *
   * **Note:** Use the function pattern when accessing browser-only APIs.
   */
  children: ReactNodeOrFunction
  /**
   * The fallback content to render while the component is mounting on the client
   * side.
   */
  fallback?: ReactNode
}

/**
 * `ClientOnly` is a component that renders its children only on the client side.
 *
 * @see https://yamada-ui.com/components/client-only
 */
export const ClientOnly: FC<ClientOnlyProps> = (props) => {
  const { children, fallback } = props
  const mounted = useMounted({ state: true })

  return (
    <Show fallback={fallback} when={mounted}>
      {children}
    </Show>
  )
}
