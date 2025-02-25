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
import { createComponent, ui } from "../../core"
import { assignRef, cx } from "../../utils"
import { Portal } from "../portal"
import { noticeStyle } from "./notice.style"

export interface NoticeProviderProps
  extends HTMLUIProps,
    Omit<Required<ThemeConfig>["notice"], "options">,
    ThemeProps<NoticeStyle> {
  limitRef: RefObject<number>
  onChangeLimit: (limit: number) => void
}

// const placements = [
//   "start-start",
//   "start-center",
//   "start-end",
//   "end-start",
//   "end-center",
//   "end-end",
// ]

export const mapPlacementToPosition = (
  placement: NoticePlacement | undefined,
):
  | "bottom-center"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "top-left"
  | "top-right" => {
  if (!placement) return "top-center"

  const mapping: {
    [key in NoticePlacement]: ReturnType<typeof mapPlacementToPosition>
  } = {
    end: "bottom-right",
    "end-center": "bottom-center",
    "end-end": "bottom-right",
    "end-start": "bottom-left",
    start: "top-right",
    "start-center": "top-center",
    "start-end": "top-right",
    "start-start": "top-left",
  }

  return mapping[placement]
}

export const {
  component,
  PropsContext: NoticeProviderPropsContext,
  usePropsContext: useNoticeProviderContext,
  withContext,
} = createComponent<NoticeProviderProps, NoticeStyle>("notice", noticeStyle)

export const NoticeProvider = withContext(
  ({ appendToParentPortal, children, containerRef }) => {
    const placement = "start-center"
    const onChangeLimitRef = useRef<(limit: number) => void>(() => void 0)

    const onChangeLimit = useCallback(
      (limit: number) => onChangeLimitRef.current(limit),
      [],
    )

    const limitRef = useRef(3)

    const context = useMemo(
      () => ({
        limitRef,
        onChangeLimit,
      }),
      [onChangeLimit],
    )

    const position = mapPlacementToPosition(placement)

    return (
      <NoticeProviderPropsContext.Provider value={context}>
        {children}
        <Portal
          appendToParentPortal={appendToParentPortal}
          containerRef={containerRef}
        >
          <ui.ul
            className={cx("ui-notice__list", `ui-notice__list--${placement}`)}
          >
            <ToasterComponent
              limitRef={limitRef}
              position={position}
              onChangeLimitRef={onChangeLimitRef}
            />
          </ui.ul>
        </Portal>
      </NoticeProviderPropsContext.Provider>
    )
  },
)()

type Position =
  | "bottom-center"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "top-left"
  | "top-right"

const ToasterComponent = ({
  limitRef,
  position,
  onChangeLimitRef,
}: {
  limitRef: RefObject<number>
  position: Position
  onChangeLimitRef: RefObject<(limit: number) => void>
}) => {
  const [limit, setLimit] = useState(limitRef.current)

  assignRef(onChangeLimitRef, setLimit)
  return <Toaster position={position} visibleToasts={limit} />
}
