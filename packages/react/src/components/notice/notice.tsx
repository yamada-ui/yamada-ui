"use client"

import type { ReactElement } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { CloseButtonProps } from "../close-button"
import type { NoticeStyle } from "./notice.style"
import type { UseNoticeOptions } from "./use-notice"
import { toast } from "sonner"
import { createSlotComponent } from "../../core"
import { handlerAll } from "../../utils"
import { Alert } from "../alert"
import { CloseButton } from "../close-button"
import { noticeStyle } from "./notice.style"

interface ComponentContext {}

export interface NoticeProps
  extends UseNoticeOptions,
    HTMLStyledProps,
    ThemeProps<NoticeStyle> {
  /**
   * The toast ID for dismissal.
   */
  t: number | string
  /**
   * If `true`, shows a close button.
   */
  closable?: boolean
  /**
   * The description text.
   */
  description?: string
  /**
   * The icon element or loading scheme.
   */
  icon?: ReactElement | { variant?: string }
  /**
   * The loading scheme.
   */
  loadingScheme?: string
  /**
   * The status of the notice.
   */
  status?: "error" | "info" | "loading" | "success" | "warning"
  /**
   * The title text.
   */
  title?: string
  /**
   * If `true`, shows an icon.
   */
  withIcon?: boolean
  /**
   * Props for the close button.
   */
  closeButtonProps?: CloseButtonProps
  /**
   * Props for the content container.
   */
  contentProps?: HTMLStyledProps
  /**
   * Props for the description.
   */
  descriptionProps?: HTMLStyledProps
  /**
   * Props for the icon.
   */
  iconProps?: HTMLStyledProps
  /**
   * Props for the loading component.
   */
  loadingProps?: HTMLStyledProps
  /**
   * Props for the title.
   */
  titleProps?: HTMLStyledProps
}

const {
  ComponentContext,
  PropsContext: NoticePropsContext,
  usePropsContext: useNoticePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<NoticeProps, NoticeStyle, ComponentContext>(
  "notice",
  noticeStyle,
)

export { NoticePropsContext, useNoticePropsContext }

/**
 * `Notice` is a component that conveys information to the user.
 *
 * @see https://yamada-ui.com/components/notice
 */
export const Notice = withProvider<"div", NoticeProps>(
  ({
    closable,
    description,
    icon,
    loadingScheme,
    status,
    t,
    title,
    withIcon = true,
    closeButtonProps,
    contentProps,
    descriptionProps,
    iconProps,
    loadingProps,
    titleProps,
    ...rest
  }) => {
    return (
      <ComponentContext>
        <Alert.Root {...rest}>
          {withIcon ? (
            status === "loading" || loadingScheme ? (
              <Alert.Loading
                loadingScheme={loadingScheme || icon?.variant}
                {...loadingProps}
              />
            ) : (
              <Alert.Icon {...iconProps} />
            )
          ) : null}
          {title || description ? (
            <NoticeContent {...contentProps}>
              {title ? (
                <Alert.Title {...titleProps}>{title}</Alert.Title>
              ) : null}
              {description ? (
                <Alert.Description {...descriptionProps}>
                  {description}
                </Alert.Description>
              ) : null}
            </NoticeContent>
          ) : null}
          {closable ? (
            <NoticeCloseButton
              {...closeButtonProps}
              onClick={handlerAll(closeButtonProps?.onClick, () =>
                toast.dismiss(t),
              )}
            />
          ) : null}
        </Alert.Root>
      </ComponentContext>
    )
  },
  "item",
)()

export interface NoticeContentProps extends HTMLStyledProps {}

export const NoticeContent = withContext<"div", NoticeContentProps>(
  "div",
  "content",
)()

export interface NoticeCloseButtonProps extends CloseButtonProps {}

export const NoticeCloseButton = withContext<"button", NoticeCloseButtonProps>(
  CloseButton,
  "closeButton",
)()
