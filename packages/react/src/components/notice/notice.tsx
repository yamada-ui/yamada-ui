"use client"

import type { RefObject } from "react"
import type { ToasterProps } from "sonner"
import type {
  HTMLStyledProps,
  NoticeCloseStrategy,
  NoticeConfig,
  NoticePlacement,
} from "../../core"
import type { CloseButtonProps } from "../close-button"
import type { Controller, NoticeMethods } from "./notice-provider"
import type { NoticeStyle } from "./notice.style"
import type { UseNoticeOptions } from "./use-notice"
import { useCallback, useMemo, useState } from "react"
import { toast, Toaster } from "sonner"
import { createSlotComponent, styled } from "../../core"
import { assignRef, dataAttr, handlerAll, noop } from "../../utils"
import { Alert } from "../alert"
import { CloseButton } from "../close-button"
import { useNoticeContext } from "./notice-provider"
import { noticeStyle } from "./notice.style"

type ToasterPosition = Required<ToasterProps>["position"]

export const PLACEMENT_MAP: {
  [key in NoticePlacement]: ToasterPosition
} = {
  end: "bottom-center",
  "end-center": "bottom-center",
  "end-end": "bottom-right",
  "end-start": "bottom-left",
  start: "top-center",
  "start-center": "top-center",
  "start-end": "top-right",
  "start-start": "top-left",
}

export interface NoticeRootProps
  extends Pick<Required<NoticeConfig>, "expand" | "limit" | "placement"> {
  ref: RefObject<Controller>
}

const {
  PropsContext: NoticePropsContext,
  usePropsContext: useNoticePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<NoticeRootProps, NoticeStyle>("notice", noticeStyle)

export { NoticePropsContext, useNoticePropsContext }

export const NoticeRoot = withProvider<"fragment", NoticeRootProps>(
  ({ ref, expand, limit, placement, ...rest }) => {
    const { getId } = useNoticeContext()
    const position = useMemo(() => PLACEMENT_MAP[placement], [placement])
    const [updatedLimit, setUpdatedLimit] = useState(limit)

    const getLimit = useCallback<NoticeMethods["getLimit"]>(
      (target) => {
        if (target === placement && updatedLimit !== limit) {
          return updatedLimit
        } else {
          return limit
        }
      },
      [placement, limit, updatedLimit],
    )

    const updateLimit = useCallback<NoticeMethods["updateLimit"]>(
      ({ limit, placement: target }) => {
        if (target === placement) setUpdatedLimit(limit)
      },
      [placement],
    )

    assignRef(ref.current.updateLimit, updateLimit)
    assignRef(ref.current.getLimit, getLimit)

    return (
      <styled.div {...rest}>
        <Toaster
          id={getId(placement)}
          expand={expand}
          gap={16}
          mobileOffset="var(--mobile-offset)"
          offset="var(--offset)"
          position={position}
          visibleToasts={updatedLimit}
        />
      </styled.div>
    )
  },
  "root",
)()

export interface NoticeItemProps
  extends UseNoticeOptions,
    Omit<HTMLStyledProps, "id" | "title"> {
  closeStrategies?: NoticeCloseStrategy[]
}

export const NoticeItem = withContext<"div", NoticeItemProps>(
  ({
    id,
    variant = "plain",
    closable,
    closeStrategies = ["click", "drag"],
    description,
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
    const onClose = useCallback(() => toast.dismiss(id), [id])

    return (
      <Alert.Root
        variant={variant}
        status={status}
        {...rest}
        onClick={handlerAll(
          onClick,
          closable && closeStrategies.includes("click") ? onClose : noop,
        )}
      >
        {withIcon ? (
          loadingScheme ? (
            <Alert.Loading loadingScheme={loadingScheme} {...loadingProps} />
          ) : (
            <Alert.Icon {...iconProps} />
          )
        ) : null}

        <NoticeContent
          data-close-button={dataAttr(
            closable && closeStrategies.includes("button"),
          )}
          {...contentProps}
        >
          {title ? (
            <Alert.Title me="0" {...titleProps}>
              {title}
            </Alert.Title>
          ) : null}
          {description ? (
            <Alert.Description lineClamp={2} {...descriptionProps}>
              {description}
            </Alert.Description>
          ) : null}
        </NoticeContent>

        {closable && closeStrategies.includes("button") ? (
          <NoticeCloseButton
            data-variant={variant}
            {...closeButtonProps}
            onClick={handlerAll(closeButtonProps?.onClick, onClose)}
          />
        ) : null}
      </Alert.Root>
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
