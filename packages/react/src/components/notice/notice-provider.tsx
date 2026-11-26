"use client"

import type { FC, RefObject } from "react"
import type {
  HTMLStyledProps,
  NoticeConfig,
  NoticePlacement,
  ThemeProps,
} from "../../core"
import type { NoticeStyle } from "./notice.style"
import { createContext, createRef, use, useId, useMemo, useState } from "react"
import { Portal } from "../portal"
import { NoticeRoot, PLACEMENT_MAP } from "./notice"

export interface NoticeProviderProps
  extends HTMLStyledProps, NoticeConfig, ThemeProps<NoticeStyle> {
  /**
   * Container ref for the portal.
   */
  containerRef?: RefObject<HTMLElement>
}

interface NoticeState {
  limit: number
  placement: NoticePlacement
}

export interface NoticeMethods {
  getId: (placement: NoticePlacement) => string
  getLimit: (placement: NoticePlacement) => number
  updateLimit: (state: NoticeState) => void
}

interface NoticeContext extends NoticeMethods {}

const NoticeContext = createContext({} as NoticeContext)

export type Controller = Pick<NoticeMethods, "getLimit" | "updateLimit">

const createMethods = (
  id: string,
  refs: Map<NoticePlacement, RefObject<Controller | null>>,
  defaultLimit: number,
): NoticeMethods => ({
  getId: (placement) => {
    return `${id}-${placement}`
  },
  getLimit: (placement) => {
    return refs.get(placement)?.current?.getLimit(placement) ?? defaultLimit
  },
  updateLimit: (state) => {
    const { placement } = state
    refs.get(placement)?.current?.updateLimit(state)
  },
})

export const NoticeProvider: FC<NoticeProviderProps> = ({
  children,
  containerRef,
  expand = false,
  limit = 3,
}) => {
  const [placementMap] = useState(() => {
    const placements = Object.keys(PLACEMENT_MAP) as NoticePlacement[]

    return new Map(
      placements.map((placement) => [placement, createRef<Controller>()]),
    )
  })
  const id = useId()

  const value = useMemo(
    () => createMethods(id, placementMap, limit),
    [id, limit, placementMap],
  )

  const components = useMemo(
    () =>
      Array.from(placementMap, ([placement, ref]) => (
        <NoticeRoot
          key={placement}
          ref={ref}
          expand={expand}
          limit={limit}
          placement={placement}
        />
      )),
    [limit, expand, placementMap],
  )

  return (
    <NoticeContext value={value}>
      <Portal containerRef={containerRef}>{components}</Portal>
      {children}
    </NoticeContext>
  )
}

export const useNoticeContext = (): NoticeContext => {
  const context = use(NoticeContext)

  return context
}
