"use client"

import type { FC, RefObject } from "react"
import type {
  HTMLStyledProps,
  NoticeConfig,
  NoticePlacement,
  ThemeProps,
} from "../../core"
import type { NoticeStyle } from "./notice.style"
import { createContext, createRef, use, useMemo, useRef } from "react"
import { Portal } from "../portal"
import { NoticeRoot, PLACEMENT_MAP } from "./notice"

export interface NoticeProviderProps
  extends HTMLStyledProps,
    NoticeConfig,
    ThemeProps<NoticeStyle> {
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
  getLimit: (placement: NoticePlacement) => number
  updateLimit: (state: NoticeState) => void
}

interface NoticeContext {
  getLimit: (placement: NoticePlacement) => number
  updateLimit: (state: NoticeState) => void
}

const NoticeContext = createContext({} as NoticeContext)

export type Controller = ReturnType<typeof createController>

const createController = () => ({
  getLimit: createRef<NoticeMethods["getLimit"]>(),
  updateLimit: createRef<NoticeMethods["updateLimit"]>(),
})

const createMethods = (
  refs: {
    [K in NoticePlacement]?: RefObject<Controller>
  },
  defaultLimit: number,
): NoticeMethods => ({
  getLimit: (placement) => {
    const method = refs[placement]?.current.getLimit.current

    return method?.(placement) ?? defaultLimit
  },
  updateLimit: (state) => {
    const { placement } = state
    const method = refs[placement]?.current.updateLimit.current

    method?.(state)
  },
})

export const NoticeProvider: FC<NoticeProviderProps> = ({
  children,
  containerRef,
  expand = false,
  limit = 3,
}) => {
  const placementMap = useRef<{
    [K in NoticePlacement]?: RefObject<Controller>
  }>({})

  const value = useMemo(
    () => ({ ...createMethods(placementMap.current, limit) }),
    [limit],
  )

  const components = useMemo(() => {
    return (Object.keys(PLACEMENT_MAP) as NoticePlacement[]).map(
      (placement) => {
        if (!placementMap.current[placement])
          placementMap.current[placement] = { current: createController() }

        return (
          <NoticeRoot
            key={placement}
            ref={placementMap.current[placement]}
            expand={expand}
            limit={limit}
            placement={placement}
          />
        )
      },
    )
  }, [limit, expand])

  return (
    <NoticeContext value={value}>
      {children}
      <Portal containerRef={containerRef}>{components}</Portal>
    </NoticeContext>
  )
}

export const useNoticeContext = (): NoticeContext => {
  const context = use(NoticeContext)

  return context
}
