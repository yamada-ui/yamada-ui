import type { FC, RefObject } from "react"
import type {
  HTMLStyledProps,
  NoticePlacement,
  ThemeConfig,
  ThemeProps,
} from "../../core"
import type { NoticeStyle } from "./notice.style"
import {
  createContext,
  createRef,
  use,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react"
import { Toaster } from "sonner"
import { assignRef } from "../../utils"
import { Portal } from "../portal"

export interface NoticeProviderProps
  extends HTMLStyledProps,
    Omit<Required<ThemeConfig>["notice"], "options">,
    ThemeProps<NoticeStyle> {
  /**
   * Container ref for the portal.
   */
  containerRef?: RefObject<HTMLElement>
}

export interface NoticeContext {
  getLimit: (placement: NoticePlacement) => number
  updateLimit: (state: { limit: number; placement: NoticePlacement }) => void
}

type NoticePosition =
  | "bottom-center"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "top-left"
  | "top-right"

/**
 * @private
 * Creates a position string from vertical and horizontal placement.
 */
const createPositionFromPlacement = (
  vertical: "bottom" | "top",
  horizontal: "center" | "left" | "right",
): NoticePosition => {
  return `${vertical}-${horizontal}`
}

const placementMapping = {
  end: createPositionFromPlacement("bottom", "right"),
  "end-center": createPositionFromPlacement("bottom", "center"),
  "end-end": createPositionFromPlacement("bottom", "right"),
  "end-start": createPositionFromPlacement("bottom", "left"),
  start: createPositionFromPlacement("top", "right"),
  "start-center": createPositionFromPlacement("top", "center"),
  "start-end": createPositionFromPlacement("top", "right"),
  "start-start": createPositionFromPlacement("top", "left"),
} as const

/**
 * @private
 * Maps NoticePlacement to NoticePosition for the Toaster.
 */
export const mapPlacementToPosition = (
  placement: NoticePlacement = "start-center",
): NoticePosition => {
  return placementMapping[placement]
}

export const NoticeContext = createContext({} as NoticeContext)

interface NoticeMethods {
  getLimit: (placement: NoticePlacement) => number
  updateLimit: (state: { limit: number; placement: NoticePlacement }) => void
}

type Controller = ReturnType<typeof createController>

const createController = () => ({
  getLimit: createRef<NoticeMethods["getLimit"]>(),
  updateLimit: createRef<NoticeMethods["updateLimit"]>(),
})

const createMethods = (refs: {
  [K in NoticePlacement]?: RefObject<Controller>
}): NoticeMethods => ({
  getLimit: (placement: NoticePlacement) => {
    return refs[placement]?.current.getLimit.current?.(placement) ?? 3
  },
  updateLimit: (state: { limit: number; placement: NoticePlacement }) => {
    refs[state.placement]?.current.updateLimit.current?.(state)
  },
})

export const NoticeProvider: FC<NoticeProviderProps> = ({
  children,
  containerRef,
  limit = 3,
}) => {
  const limits = useRef<{ [K in NoticePlacement]?: RefObject<Controller> }>({})

  const value = useMemo(
    () => ({
      getLimit: createMethods(limits.current).getLimit,
      updateLimit: createMethods(limits.current).updateLimit,
    }),
    [],
  )

  const components = useMemo(() => {
    return Object.keys(placementMapping).map((placement) => {
      const placementKey = placement as NoticePlacement
      if (!limits.current[placementKey]) {
        limits.current[placementKey] = { current: createController() }
      }

      return (
        <NoticeProviderComponent
          key={placement}
          ref={limits.current[placementKey]}
          limit={limit}
          placement={placementKey}
        />
      )
    })
  }, [limit])

  return (
    <NoticeContext value={value}>
      {children}
      <Portal containerRef={containerRef}>{components}</Portal>
    </NoticeContext>
  )
}

interface NoticeProviderComponentProps {
  ref: RefObject<Controller>
  limit: number
  placement: NoticePlacement
}

/**
 * @private
 * NoticeProviderComponent is only used internally by NoticeProvider to render the Toaster.
 */
const NoticeProviderComponent: FC<NoticeProviderComponentProps> = ({
  ref,
  limit,
  placement,
}) => {
  const position = mapPlacementToPosition(placement)
  const [visibleToasts, setVisibleToasts] = useState(limit)

  const getLimit = useCallback<NoticeMethods["getLimit"]>(
    (target) => {
      if (target === placement && visibleToasts !== limit) {
        return visibleToasts
      }
      return 3
    },
    [placement, limit, visibleToasts],
  )

  const updateLimit = useCallback<NoticeMethods["updateLimit"]>(
    ({ limit: newLimit, placement: target }) => {
      if (target === placement) {
        setVisibleToasts(newLimit)
      }
    },
    [placement],
  )

  assignRef(ref.current.updateLimit, updateLimit)
  assignRef(ref.current.getLimit, getLimit)

  return (
    <Toaster id={placement} position={position} visibleToasts={visibleToasts} />
  )
}

/**
 * `useNoticeContext` is a custom hook for accessing the notice context.
 */
export const useNoticeContext = (): NoticeContext => {
  const context = use(NoticeContext)

  return context
}
