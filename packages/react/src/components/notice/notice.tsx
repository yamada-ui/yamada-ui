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
import { isFunction } from "../../utils"
import { Alert } from "../alert"
import { CloseButton } from "../button"
import { useNoticeContext, withContext } from "./notice-provider"
import { mapPlacementToPosition } from "./notice-provider"

export interface NoticeExtraInfoProps {
  /**
   * The id of the notice.
   */
  id?: number | string
  /**
   * The description of the notice.
   */
  description?: React.ReactNode
  /**
   * The title of the notice.
   */
  title?: React.ReactNode
}

export interface ExternalNotice extends ExternalToast {}

export interface UseNoticeOptions
  extends Omit<NoticeConfig, "onChangeLimit" | "placementRef">,
    NoticeExtraInfoProps {
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
  closeButton?: ((notice: NoticeExtraInfoProps) => React.JSX.Element) | boolean
  /**
   * A function that returns the component of the notice.
   */
  component?: (notice: NoticeExtraInfoProps) => React.JSX.Element
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
  onAutoClose?: (notice: NoticeExtraInfoProps) => void
  /**
   * A function that is called when the notice is dismissed.
   */
  onDismiss?: (notice: NoticeExtraInfoProps) => void
}

export interface NoticeOptions
  extends Omit<AlertRootProps, keyof UseNoticeOptions>,
    UseNoticeOptions {}

export const useNotice = (options?: NoticeOptions) => {
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
      id: NoticeExtraInfoProps["id"],
      description: NoticeExtraInfoProps["description"],
      title: NoticeExtraInfoProps["title"],
      hookOnAutoClose?: (info: NoticeExtraInfoProps) => void,
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
      id: NoticeExtraInfoProps["id"],
      description: NoticeExtraInfoProps["description"],
      title: NoticeExtraInfoProps["title"],
      hookOnDismiss?: (info: NoticeExtraInfoProps) => void,
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

  return (props: NoticeOptions) => {
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
    } = props

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
        (id) => hookComponent({ id, description, title }),
        options,
      )
    }

    if (noticeComponent) {
      return toast.custom(
        (id) => noticeComponent({ id, description, title }),
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
}

export const dismiss = (id?: NoticeExtraInfoProps["id"]) => {
  const toasts = toast.getToasts()
  const idToDismiss = id ?? toasts[toasts.length - 1]?.id
  if (idToDismiss) {
    toast.dismiss(idToDismiss)
    return toasts[toasts.length - 2]?.id
  }
}

export const dismissAll = () => {
  return toast.dismiss()
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
  ({ noticeId, ...props }) => {
    return (
      <CloseButton
        colorScheme="gray"
        onClick={(e) => {
          e.stopPropagation()
          dismiss(noticeId)
        }}
        {...props}
      />
    )
  },
  "close-button",
)()
