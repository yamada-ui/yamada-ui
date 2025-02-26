import type { RefObject } from "react"
import type {
  HTMLUIProps,
  NoticePlacement,
  ThemeConfig,
  ThemeProps,
} from "../../core"
import type { NoticeStyle } from "./notice.style"
import { useCallback, useMemo, useRef, useState } from "react"
import { Toaster } from "sonner"
import { createSlotComponent } from "../../core"
import { assignRef } from "../../utils"
import { Portal } from "../portal"
import { noticeStyle } from "./notice.style"

export interface NoticeProviderProps
  extends HTMLUIProps,
    Omit<Required<ThemeConfig>["notice"], "options">,
    ThemeProps<NoticeStyle> {}

export interface NoticeContext {
  /**
   * This is the reference to the placement of the toaster.
   */
  placementRef: React.RefObject<NoticePlacement>
  /**
   * Update the limit of notices.
   * @param limit The new limit.
   */
  onChangeLimit: (limit: number) => void
}

type PositionMapping =
  | "bottom-center"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "top-left"
  | "top-right"

const createPositionMapping = (
  vertical: "bottom" | "top",
  horizontal: "center" | "left" | "right",
): PositionMapping => {
  return `${vertical}-${horizontal}` as PositionMapping
}

const placementMapping = {
  end: createPositionMapping("bottom", "right"),
  "end-center": createPositionMapping("bottom", "center"),
  "end-end": createPositionMapping("bottom", "right"),
  "end-start": createPositionMapping("bottom", "left"),
  start: createPositionMapping("top", "right"),
  "start-center": createPositionMapping("top", "center"),
  "start-end": createPositionMapping("top", "right"),
  "start-start": createPositionMapping("top", "left"),
} as const

export const mapPlacementToPosition = (
  placement: NoticePlacement = "start-center",
): PositionMapping => placementMapping[placement]

export const {
  component,
  ComponentContext: NoticeContext,
  PropsContext: NoticePropsContext,
  useComponentContext: useNoticeContext,
  usePropsContext: useNoticePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<NoticeProviderProps, NoticeStyle, NoticeContext>(
  "notice",
  noticeStyle,
)

export const NoticeProvider = withProvider(
  ({ appendToParentPortal, children, containerRef }) => {
    const placementRef = useRef<NoticePlacement>("start-center")
    const onChangeLimitRef = useRef<(limit: number) => void>(() => void 0)

    const onChangeLimit = useCallback((limit: number) => {
      if (limit >= 0) {
        onChangeLimitRef.current(limit)
      }
    }, [])

    const context = useMemo(
      () => ({
        placementRef,
        onChangeLimit,
      }),
      [onChangeLimit, placementRef],
    )

    return (
      <NoticeContext value={context}>
        {children}
        <Portal
          appendToParentPortal={appendToParentPortal}
          containerRef={containerRef}
        >
          <NoticeProviderComponent
            placementRef={placementRef}
            onChangeLimitRef={onChangeLimitRef}
          />
        </Portal>
      </NoticeContext>
    )
  },
)()

interface NoticeProviderComponentProps
  extends HTMLUIProps,
    ThemeProps<NoticeStyle> {
  placementRef: RefObject<NoticePlacement>
  onChangeLimitRef: RefObject<(limit: number) => void>
}

const NoticeProviderComponent = withContext<
  "section",
  NoticeProviderComponentProps
>(({ placementRef, onChangeLimitRef }) => {
  const [limit, setLimit] = useState<number>(3)
  const position = mapPlacementToPosition(placementRef.current)

  assignRef(onChangeLimitRef, setLimit)

  return <Toaster position={position} visibleToasts={limit} />
})()
