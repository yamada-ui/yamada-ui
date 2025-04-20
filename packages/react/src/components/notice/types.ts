import type { ReactNode } from "react"
import type { CSSObject, CSSProps, Placement } from "../../core"
import type { AlertLoadingProps, AlertRootProps } from "../alert"
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

export interface NoticeComponentProps extends NoticeConfig {
  onClose: () => void
}

export interface NoticeConfig {
  css?: CSSObject | CSSObject[] | undefined
  style?: React.CSSProperties | undefined
  colorScheme?: AlertRootProps["colorScheme"]
  variant?: AlertRootProps["variant"]
  /**
   * If `true`, the portal will check if it is within a parent portal
   * and append itself to the parent's portal node.
   * This provides nesting for portals.
   *
   * If `false`, the portal will always append to `document.body`
   * regardless of nesting. It is used to opt out of portal nesting.
   *
   * @default true
   */
  appendToParentPortal?: PortalProps["appendToParentPortal"]
  /**
   * If `true`, allows the notice to be removed.
   *
   * @default false
   */
  closable?: boolean
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
  onDragEnd?: (event: MouseEvent | TouchEvent) => void
}
