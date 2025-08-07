"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { NoticeStyle } from "./notice.style"
import { useMemo } from "react"
import { createSlotComponent } from "../../core"
import {
  AlertDescription,
  AlertIcon,
  AlertLoading,
  AlertRoot,
  AlertTitle,
} from "../alert"
import { CloseButton } from "../close-button"
import { noticeStyle } from "./notice.style"

interface ComponentContext {
  closable?: boolean
  onClose?: () => void
}

export interface NoticeRootProps
  extends HTMLStyledProps,
    ThemeProps<NoticeStyle> {
  /**
   * If `true`, allows the notice to be removed.
   *
   * @default false
   */
  closable?: boolean
  /**
   * Callback invoked when the notice is closed.
   */
  onClose?: () => void
}

const {
  ComponentContext,
  PropsContext: NoticePropsContext,
  useComponentContext,
  usePropsContext: useNoticePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<NoticeRootProps, NoticeStyle, ComponentContext>(
  "notice",
  noticeStyle,
)

export { NoticePropsContext, useNoticePropsContext }

/**
 * `Notice` is a component that conveys information to the user.
 *
 * @see https://yamada-ui.com/components/notice
 */
export const NoticeRoot = withProvider<"div", NoticeRootProps>(
  ({ closable, onClose, ...props }) => {
    const context = useMemo(() => ({ closable, onClose }), [closable, onClose])

    return (
      <ComponentContext value={context}>
        <AlertRoot {...props} />
      </ComponentContext>
    )
  },
  "root",
)()

export interface NoticeIconProps extends HTMLStyledProps<"svg"> {}

export const NoticeIcon = withContext<"svg", NoticeIconProps>(
  (props) => <AlertIcon {...props} />,
  "icon",
)()

export interface NoticeLoadingProps extends HTMLStyledProps<"svg"> {}

export const NoticeLoading = withContext<"svg", NoticeLoadingProps>(
  (props) => <AlertLoading {...props} />,
  "loading",
)()

export interface NoticeTitleProps extends HTMLStyledProps<"p"> {}

export const NoticeTitle = withContext<"p", NoticeTitleProps>(
  (props) => <AlertTitle {...props} />,
  "title",
)()

export interface NoticeDescriptionProps extends HTMLStyledProps<"span"> {}

export const NoticeDescription = withContext<"span", NoticeDescriptionProps>(
  (props) => <AlertDescription {...props} />,
  "description",
)()

export interface NoticeCloseButtonProps {
  /**
   * The size of the close button.
   */
  size?: "lg" | "md" | "sm" | "xs"
}

export const NoticeCloseButton = withContext<"button", NoticeCloseButtonProps>(
  ({ size = "sm", ...props }) => {
    const { closable, onClose } = useComponentContext()

    if (!closable) return null

    return (
      <CloseButton
        size={size}
        position="absolute"
        right={2}
        top={2}
        onClick={onClose}
        {...props}
      />
    )
  },
  "closeButton",
)()
