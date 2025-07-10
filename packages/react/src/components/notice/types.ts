import type { Variants } from "motion/react"
import type { ReactNode } from "react"
import type { CSSProps, HTMLStyledProps, Placement } from "../../core"
import type { AlertLoadingProps, AlertRootProps } from "../alert"
import type { HTMLMotionProps } from "../motion"
import type { PortalProps } from "../portal"
import type { StatusScheme } from "../status"

export type NoticePlacement = Extract<
  Placement,
  | "end"
  | "end-center"
  | "end-end"
  | "end-start"
  | "start"
  | "start-center"
  | "start-end"
  | "start-start"
>

export interface NoticeComponentProps
  extends Omit<NoticeConfig, "itemProps" | "onDragEnd">,
    NoticeCommonProps {}

export interface NoticeCommonProps {
  id: number | string
  onClose: () => void
}

export type DragEndEventHandler = Required<HTMLMotionProps>["onDragEnd"]

export interface NoticeConfig {
  colorScheme?: AlertRootProps["colorScheme"]
  variant?: AlertRootProps["variant"]
  /**
   * The action to use.
   */
  action?: (props: NoticeCommonProps) => ReactNode
  /**
   * If `true`, allows the notice to be removed.
   *
   * @default false
   */
  closable?: boolean
  /**
   * If `true`, the notice will be closed when the drag ends.
   *
   * @default false
   */
  closeOnDrag?: boolean
  /**
   * The strategy to remove the notice when `closable` is set to `true`
   *
   * @default 'button'
   */
  closeStrategy?: "both" | "button" | "element"
  /**
   * The custom notice component to use.
   */
  component?: (props: NoticeComponentProps) => ReactNode
  /**
   * The `ref` to the component where the portal will be attached to.
   */
  containerRef?: PortalProps["containerRef"]
  /**
   * The description of the notice.
   */
  description?: ReactNode
  /**
   * The number of `ms` the notice will continue to be displayed.
   *
   * If `null`, the notice will continue to display.
   * Please use in conjunction with `closable`.
   *
   * @default 5000
   */
  duration?: null | number
  /**
   * The loading icon to use.
   */
  icon?: {
    children?: ReactNode
    /**
     * The CSS `color` property.
     */
    color?: CSSProps["color"]
    loadingScheme?: AlertLoadingProps["loadingScheme"]
  }
  /**
   * The maximum value at which notice will be displayed.
   * @default 5
   */
  limit?: number
  /**
   * The placement of the notice.
   *
   * @default 'top'
   */
  placement?: NoticePlacement
  /**
   * The status of the notice.
   *
   * @default 'info'
   */
  status?: "loading" | StatusScheme
  /**
   * The title of the notice.
   */
  title?: ReactNode
  /**
   * The variants of the notice.
   * Check the docs to see the variants of possible modifiers you can pass.
   *
   * @see Docs https://motion.dev/docs/react-animation#variants
   */
  variants?: Variants
  /**
   * Props for notice item element.
   */
  itemProps?: {
    /**
     * Applies constraints on the permitted draggable area.
     *
     * @default 0
     */
    dragConstraints?: number
    /**
     * The degree of movement allowed outside constraints. 0 = no movement, 1 = full movement.
     *
     * @default 0.1
     */
    dragElastic?: number
    /**
     * Offset from being dragged to closing.
     *
     * @default 80
     */
    dragOffset?: number
    /**
     * Velocity of the drag that triggers close.
     *
     * @default 100
     */
    dragVelocity?: number
  }
  /**
   * Props for notice list element.
   */
  listProps?: HTMLStyledProps<"ul">
}

export interface UseNoticeOptions extends Omit<NoticeConfig, "onDragEnd"> {}

export interface NoticeOptions extends UseNoticeOptions {
  id: number | string
  message: (props: NoticeComponentProps) => ReactNode
  placement: NoticePlacement
  onClose: () => void
  onDelete: () => void
  isDelete?: boolean
  onCloseComplete?: () => void
}
