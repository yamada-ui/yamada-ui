"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { CloseButtonProps } from "../close-button"
import type { NoticeStyle } from "./notice.style"
import type { CloseAction, UseNoticeOptions } from "./use-notice"
import { toast } from "sonner"
import { createSlotComponent } from "../../core"
import { handlerAll, noop } from "../../utils"
import { Alert } from "../alert"
import { CloseButton } from "../close-button"
import { noticeStyle } from "./notice.style"
interface ComponentContext {}

export interface NoticeProps
  extends UseNoticeOptions,
    HTMLStyledProps,
    ThemeProps<NoticeStyle> {
  /**
   * Close actions for the notice.
   */
  closeActions?: CloseAction[]
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
    id,
    closable,
    closeActions = ["click", "drag"],
    description,
    icon,
    loadingScheme,
    status,
    title,
    withIcon = true,
    closeButtonProps,
    contentProps,
    descriptionProps,
    iconProps,
    loadingProps,
    titleProps,
    onClick,
    ...rest
  }) => {
    return (
      <ComponentContext>
        <Alert.Root
          {...rest}
          onClick={handlerAll(
            onClick,
            closeActions.includes("click") ? () => toast.dismiss(id) : noop,
          )}
        >
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
          {closable && closeActions.includes("button") ? (
            <NoticeCloseButton
              {...closeButtonProps}
              onClick={handlerAll(closeButtonProps?.onClick, () =>
                toast.dismiss(id),
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
