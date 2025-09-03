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

interface NoticeLimitState {
  limit: number
  placement: NoticePlacement
}

export interface NoticeContext {
  getLimit: (placement: NoticePlacement) => number
  updateLimit: (state: NoticeLimitState) => void
}

type ExtractVertical<T extends NoticePlacement> = T extends `start${string}`
  ? "top"
  : "bottom"

type ExtractHorizontal<T extends NoticePlacement> = T extends `${string}-start`
  ? "left"
  : T extends `${string}-end`
    ? "right"
    : "center"

type PlacementMapping = {
  [K in NoticePlacement]: `${ExtractVertical<K>}-${ExtractHorizontal<K>}`
}

/**
 * Maps NoticePlacement to NoticePosition for the Toaster.
 */
const placements: PlacementMapping = {
  end: "bottom-center",
  "end-center": "bottom-center",
  "end-end": "bottom-right",
  "end-start": "bottom-left",
  start: "top-center",
  "start-center": "top-center",
  "start-end": "top-right",
  "start-start": "top-left",
}

export const NoticeContext = createContext({} as NoticeContext)

interface NoticeMethods {
  getLimit: (placement: NoticePlacement) => number
  updateLimit: (state: NoticeLimitState) => void
}

type Controller = ReturnType<typeof createController>

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
    return (
      refs[placement]?.current.getLimit.current?.(placement) ?? defaultLimit
    )
  },
  updateLimit: (state) => {
    refs[state.placement]?.current.updateLimit.current?.(state)
  },
})

/**
 * `NoticeProvider` is a provider component that manages notice placement and limits.
 */
export const NoticeProvider: FC<NoticeProviderProps> = ({
  children,
  containerRef,
  limit = 3,
}) => {
  const limits = useRef<{ [K in NoticePlacement]?: RefObject<Controller> }>({})

  const value = useMemo(
    () => ({ ...createMethods(limits.current, limit) }),
    [limit],
  )

  const components = useMemo(() => {
    return Object.keys(placements).map((placement) => {
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
 * NoticeProviderComponent is only used internally by NoticeProvider to render the Toaster.
 */
const NoticeProviderComponent: FC<NoticeProviderComponentProps> = ({
  ref,
  limit,
  placement,
}) => {
  const position = useMemo(() => placements[placement], [placement])
  const [visibleToasts, setVisibleToasts] = useState(limit)

  const getLimit = useCallback<NoticeMethods["getLimit"]>(
    (target) => {
      if (target === placement && visibleToasts !== limit) {
        return visibleToasts
      }
      return limit
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
