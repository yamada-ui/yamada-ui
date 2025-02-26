import type { ExternalToast } from "sonner"
import type { CSSObject, NoticeConfig } from "../../core"
import type {
  AlertDescriptionProps,
  AlertIconProps,
  AlertLoadingProps,
  AlertRootProps,
  AlertTitleProps,
} from "../alert"
import type { CloseButtonProps } from "../button"
import { useCallback } from "react"
import { toast } from "sonner"
import { ui } from "../../core"
import { handlerAll, isFunction } from "../../utils"
import { Alert } from "../alert"
import { CloseButton } from "../button"
import { useNoticeContext, withContext } from "./notice-provider"
import { mapPlacementToPosition } from "./notice-provider"

export interface NoticeExtraProps {
  /**
   * The id of the notice.
   */
  id?: number | string
  /**
   * The description of the notice.
   */
  description?: React.ReactNode
  /**
   * Function to dismiss one or the most recent toast.
   */
  dismiss?: (id: number | string) => number | string | undefined
  /**
   * Function to dismiss all toasts.
   */
  dismissAll?: () => void
  /**
   * The title of the notice.
   */
  title?: React.ReactNode
}

export interface ExternalNotice extends ExternalToast {}

export interface UseNoticeOptions
  extends Omit<NoticeConfig, "onChangeLimit" | "placementRef">,
    NoticeExtraProps {
  /**
   * The style of the alert.
   */
  style?: CSSObject
  /**
   * The variant of the alert.
   *
   */
  variant?: AlertRootProps["variant"]
  /**
   * Whether to show the close button.
   *
   * @default false
   */
  closeButton?: ((notice: NoticeExtraProps) => React.JSX.Element) | boolean
  /**
   * A function that returns the component of the notice.
   */
  component?: (notice: NoticeExtraProps) => React.JSX.Element
  /**
   * The icon of the alert.
   */
  icon?: AlertIconProps & { loadingScheme?: AlertLoadingProps["loadingScheme"] }
  /**
   * The status of the alert.
   * @default 'info'
   */
  status?: "loading" | AlertRootProps["status"]
  /**
   * A function that is called when the notice closes automatically.
   */
  onAutoClose?: (notice: NoticeExtraProps) => void
  /**
   * A function that is called when the notice is dismissed.
   */
  onDismiss?: (notice: NoticeExtraProps) => void
}

export interface NoticeOptions
  extends Omit<AlertRootProps, keyof UseNoticeOptions>,
    UseNoticeOptions {}

export interface NoticeFunction {
  (props?: NoticeOptions): number | string
  /**
   * Dismiss one or the most recent notice.
   * @param id Optional id of the notice to dismiss
   */
  dismiss: (id?: NoticeExtraProps["id"]) => number | string | undefined
  /**
   * Dismiss all notices.
   */
  dismissAll: () => void
  /**
   * Update an existing notice with new properties.
   * @param id The id of the notice to update
   * @param props New properties to update the notice with
   */
  update: (id: number | string, props: Partial<NoticeOptions>) => void
  _call: (props: NoticeOptions) => number | string
}

export const useNotice = (options?: NoticeOptions): NoticeFunction => {
  const {
    id: useNoticeId,
    style: useNoticeStyle,
    colorScheme: useNoticeColorScheme,
    variant: useNoticeVariant,
    closable: useNoticeClosable = true,
    closeButton: useNoticeCloseButton,
    component: useNoticeComponent,
    description: useNoticeDescription,
    duration: useNoticeDuration,
    icon: useNoticeIcon,
    limit: useNoticeLimit = 3,
    placement: useNoticePlacement = "start-center",
    status: useNoticeStatus,
    title: useNoticeTitle,
    onAutoClose: useNoticeOnAutoClose,
    onDismiss: useNoticeOnDismiss,
  } = options ?? {}

  const { placementRef, onChangeLimit } = useNoticeContext()

  const noticeOnAutoClose = useNoticeOnAutoClose
  const noticeOnDismiss = useNoticeOnDismiss
  const noticeComponent = useNoticeComponent

  const onAutoClose = useCallback(
    (
      id: NoticeExtraProps["id"],
      description: NoticeExtraProps["description"],
      title: NoticeExtraProps["title"],
      hookOnAutoClose?: (info: NoticeExtraProps) => void,
    ) => {
      const info = {
        id,
        description,
        title,
      }
      if (hookOnAutoClose) {
        hookOnAutoClose(info)
      }
      if (noticeOnAutoClose) {
        noticeOnAutoClose(info)
      }
    },
    [noticeOnAutoClose],
  )

  const onDismiss = useCallback(
    (
      id: NoticeExtraProps["id"],
      description: NoticeExtraProps["description"],
      title: NoticeExtraProps["title"],
      hookOnDismiss?: (info: NoticeExtraProps) => void,
    ) => {
      const info = {
        id,
        description,
        title,
      }
      if (hookOnDismiss) {
        hookOnDismiss(info)
      }
      if (noticeOnDismiss) {
        noticeOnDismiss(info)
      }
    },
    [noticeOnDismiss],
  )

  const noticeFn = function (specificProps?: NoticeOptions): number | string {
    if (specificProps) {
      return noticeFn._call({ ...options, ...specificProps })
    }
    return noticeFn._call(options ?? {})
  } as NoticeFunction

  noticeFn._call = (callProps: NoticeOptions): number | string => {
    const {
      id: hookId,
      style: hookStyle,
      colorScheme: hookColorScheme,
      variant: hookVariant,
      closable: hookClosable,
      closeButton: hookCloseButton,
      component: hookComponent,
      description: hookDescription,
      duration: hookDuration,
      icon: hookIcon,
      limit: hookLimit,
      placement: hookPlacement,
      status: hookStatus,
      title: hookTitle,
      onAutoClose: hookOnAutoClose,
      onDismiss: hookOnDismiss,
    } = callProps

    const currentLimit = hookLimit ?? useNoticeLimit
    const placement = hookPlacement ?? useNoticePlacement

    onChangeLimit(currentLimit)

    placementRef.current = placement

    const title = hookTitle ?? useNoticeTitle
    const description = hookDescription ?? useNoticeDescription

    const id = hookId ?? useNoticeId

    const options: ExternalNotice = {
      dismissible: hookClosable ?? useNoticeClosable,
      duration: hookDuration ?? useNoticeDuration ?? 5000,
      position: mapPlacementToPosition(placement),
      ...(id ? { id } : {}),
      onAutoClose: (notice) =>
        onAutoClose(notice.id, description, title, hookOnAutoClose),
      onDismiss: (notice) =>
        onDismiss(notice.id, description, title, hookOnDismiss),
    }

    if (hookComponent) {
      return toast.custom(
        (id) =>
          hookComponent({
            id,
            description,
            dismiss: noticeFn.dismiss,
            dismissAll: noticeFn.dismissAll,
            title,
          }),
        options,
      )
    }

    if (noticeComponent) {
      return toast.custom(
        (id) =>
          noticeComponent({
            id,
            description,
            dismiss: noticeFn.dismiss,
            dismissAll: noticeFn.dismissAll,
            title,
          }),
        options,
      )
    }

    const variant = hookVariant ?? useNoticeVariant
    const status = hookStatus ?? useNoticeStatus
    const css = { ...hookStyle, ...useNoticeStyle }
    const colorScheme = hookColorScheme ?? useNoticeColorScheme
    const icon = hookIcon ?? useNoticeIcon
    const closable = hookClosable ?? useNoticeClosable
    const closeButton = hookCloseButton ?? useNoticeCloseButton

    return toast.custom(
      (id) => (
        <NoticeRoot
          css={css}
          colorScheme={colorScheme}
          variant={variant}
          placement={placement}
          status={status}
        >
          {status === "loading" ? (
            <NoticeLoading loadingScheme={icon?.loadingScheme} />
          ) : (
            <NoticeIcon {...(icon?.color ? { color: icon.color } : {})} />
          )}
          <ui.div flex="1">
            {title ? <NoticeTitle>{title}</NoticeTitle> : null}
            {description ? (
              <NoticeDescription>{description}</NoticeDescription>
            ) : null}
          </ui.div>

          {closable && closeButton ? (
            isFunction(closeButton) ? (
              closeButton({ id, description, title })
            ) : (
              <NoticeCloseButton noticeId={id} />
            )
          ) : null}
        </NoticeRoot>
      ),
      options,
    )
  }

  noticeFn.dismiss = (
    id?: NoticeExtraProps["id"],
  ): number | string | undefined => {
    const toasts = toast.getToasts()
    const idToDismiss = id ?? toasts[toasts.length - 1]?.id
    if (idToDismiss) {
      toast.dismiss(idToDismiss)
      return toasts[toasts.length - 2]?.id
    }
  }

  noticeFn.dismissAll = (): void => {
    toast.dismiss()
  }

  noticeFn.update = (
    id: number | string,
    props: Partial<NoticeOptions>,
  ): void => {
    const updatedProps = { ...options, ...props, id }

    noticeFn._call(updatedProps)
  }

  return noticeFn
}

interface NoticeRootOptions
  extends Omit<AlertRootProps, "status">,
    Pick<
      NoticeOptions,
      | "closable"
      | "closeButton"
      | "description"
      | "icon"
      | "placement"
      | "status"
    > {
  noticeId?: NoticeOptions["id"]
}

export interface NoticeRootProps extends NoticeRootOptions {}

export const NoticeRoot = withContext<"div", NoticeRootProps>(
  ({ status, ...props }) => {
    return (
      <Alert.Root
        status={status === "loading" ? undefined : status}
        {...props}
      />
    )
  },
  "root",
)(({ placement = "start-center" }) => ({
  className: `ui-notice__root--${placement}`,
}))

export interface NoticeIconProps extends AlertIconProps {}

export const NoticeIcon = withContext<"div", NoticeIconProps>(
  ({ ...props }) => {
    return <Alert.Icon {...props} />
  },
  "icon",
)()

export interface NoticeLoadingProps extends AlertLoadingProps {}

export const NoticeLoading = withContext<"svg", NoticeLoadingProps>(
  ({ ...props }) => {
    return <Alert.Loading {...props} />
  },
  ["icon", "loading"],
)()

export interface NoticeTitleProps extends AlertTitleProps {}

export const NoticeTitle = withContext<"div", NoticeTitleProps>(
  ({ ...props }) => {
    return <Alert.Title {...props} />
  },
  "title",
)()

export interface NoticeDescriptionProps extends AlertDescriptionProps {}

export const NoticeDescription = withContext<"div", NoticeDescriptionProps>(
  ({ ...props }) => {
    return <Alert.Description {...props} />
  },
  "description",
)()

export interface NoticeCloseButtonProps
  extends Pick<NoticeOptions, "description">,
    CloseButtonProps {
  noticeId?: NoticeOptions["id"]
}

export const NoticeCloseButton = withContext<"button", NoticeCloseButtonProps>(
  ({ noticeId, onClick, ...props }) => {
    return (
      <CloseButton
        colorScheme="gray"
        onClick={(e) => {
          handlerAll(onClick, () => {
            e.stopPropagation()
            if (noticeId) {
              toast.dismiss(noticeId)
            }
          })(e)
        }}
        {...props}
      />
    )
  },
  "close-button",
)()
