import type { RefObject } from "react"
import type { HTMLStyledProps, NoticePlacement, ThemeConfig, ThemeProps } from "../../core"
import type { NoticeStyle } from "./notice.style"
import { useCallback, useMemo, useRef, useState } from "react"
import { Toaster } from "sonner"
import { createSlotComponent } from "../../core"
import { assignRef } from "../../utils"
import { Portal } from "../portal"
import { noticeStyle } from "./notice.style"

export interface NoticeProviderProps
  extends HTMLStyledProps,
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
  return `${vertical}-${horizontal}`;
};

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
  return placementMapping[placement];
};

export const {
  component,
  ComponentContext: NoticeContext,
  PropsContext: NoticePropsContext,
  useComponentContext: useNoticeContext,
  useComponentContext,
  usePropsContext: useNoticePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<NoticeProviderProps, NoticeStyle, NoticeContext>(
  "notice",
  noticeStyle,
)

export const NoticeProvider = withProvider(
  ({ children, portalProps }) => {
    const placementRef = useRef<NoticePlacement>("start-center")
    const onChangeLimitRef = useRef<(limit: number) => void>(() => void 0)

    const onChangeLimit = useCallback(
      (limit: number) => onChangeLimitRef.current(limit),
      [],
    )

    const context = useMemo(
      () => ({
        placementRef,
        onChangeLimit,
      }),
      [onChangeLimit],
    )

    return (
      <NoticeContext value={context}>
        {children}
        <Portal
          {...portalProps}
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
  extends HTMLStyledProps,
    ThemeProps<NoticeStyle> {
  placementRef: RefObject<NoticePlacement>
  onChangeLimitRef: RefObject<(limit: number) => void>
}

/**
 * @private
 * NoticeProviderComponent is only used internally by NoticeProvider to render the Toaster.
 */
const NoticeProviderComponent = withContext<
  "section",
  NoticeProviderComponentProps
>(({ placementRef, onChangeLimitRef }) => {
  const [limit, setLimit] = useState<number>(3);
  const position = mapPlacementToPosition(placementRef.current);

  assignRef(onChangeLimitRef, setLimit);

  return (
    <Toaster position={position} visibleToasts={limit} />
  );
})()
