import type { ExternalToast } from "sonner"
import type { CSSObject, HTMLStyledProps, NoticeConfig } from "../../core"
import type {
  AlertDescriptionProps,
  AlertIconProps,
  AlertLoadingProps,
  AlertRootProps,
  AlertTitleProps,
} from "../alert"
import type { CloseButtonProps } from "../close-button"
import { createContext, useCallback, useContext } from "react"
import { toast } from "sonner"
import { styled } from "../../core"
import { handlerAll, isFunction } from "../../utils"
import { Alert } from "../alert"
import { CloseButton } from "../close-button"
import {
  mapPlacementToPosition,
  useNoticeContext,
  withContext,
} from "./notice-provider"

/**
 * Type for notice id, used throughout the notice system.
 */
export type NoticeId = number | string;

/**
 * @private
 * Context to provide the current notice's id and close functions to children.
 * Used to avoid prop drilling for NoticeCloseButton and similar components.
 */
interface NoticeItemContextValue {
  id?: NoticeId
  close?: (id: NoticeId) => NoticeId | undefined
  closeAll?: () => void
}

const NoticeItemContext = createContext<NoticeItemContextValue | undefined>(
  undefined,
)

/**
 * @private
 * Hook to access the current notice's context (id, close, closeAll).
 * Returns undefined if not inside a NoticeItemContext provider.
 */
const useNoticeItemContext = (): NoticeItemContextValue | undefined => {
  return useContext(NoticeItemContext)
}

export interface NoticeExtraProps {
  /**
   * The id of the notice.
   */
  id?: NoticeId
  /**
   * Function to close one or the most recent toast.
   */
  close?: (id: NoticeId) => NoticeId | undefined
  /**
   * Function to close all toasts.
   */
  closeAll?: () => void
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
   * A function that is called when the notice is closed.
   */
  onClose?: (notice: NoticeExtraProps) => void
}

export interface NoticeOptions
  extends Omit<AlertRootProps, keyof UseNoticeOptions>,
    UseNoticeOptions {}

export interface NoticeFunction {
  (props?: NoticeOptions): NoticeId
  /**
   * Close one or the most recent notice.
   * @param id Optional id of the notice to close
   */
  close: (id?: NoticeId) => NoticeId | undefined
  /**
   * Close all notices.
   */
  closeAll: () => void
  /**
   * Update an existing notice with new properties.
   * @param id The id of the notice to update
   * @param props New properties to update the notice with
   */
  update: (id: NoticeId, props: Partial<NoticeOptions>) => void
  _call: (props: NoticeOptions) => NoticeId
}

/**
 * @private
 * Returns a NoticeItemContext.Provider with the correct value.
 */
function withNoticeItemContext(
  id: NoticeId,
  close: (id?: NoticeId) => NoticeId | undefined,
  closeAll: () => void,
  children: React.ReactNode,
) {
  return (
    <NoticeItemContext.Provider value={{ id, close, closeAll }}>
      {children}
    </NoticeItemContext.Provider>
  );
}

export const useNotice = (options?: NoticeOptions): NoticeFunction => {
  const {
    id: defaultId,
    style: defaultStyle,
    colorScheme: defaultColorScheme,
    variant: defaultVariant,
    closable: defaultClosable = true,
    closeButton: defaultCloseButton,
    component: defaultComponent,
    description: defaultDescription,
    duration: defaultDuration,
    icon: defaultIcon,
    limit: defaultLimit = 3,
    placement: defaultPlacement = "start-center",
    status: defaultStatus,
    title: defaultTitle,
    onAutoClose: defaultOnAutoClose,
    onClose: defaultOnClose,
  } = options ?? {}

  const { placementRef, onChangeLimit } = useNoticeContext()

  const onAutoClose = useCallback(
    (
      id: NoticeExtraProps["id"],
      description: NoticeExtraProps["description"],
      title: NoticeExtraProps["title"],
      onAutoCloseProp?: (info: NoticeExtraProps) => void,
    ) => {
      const info = {
        id,
        description,
        title,
      }
      if (onAutoCloseProp) {
        onAutoCloseProp(info)
      }
      if (defaultOnAutoClose) {
        defaultOnAutoClose(info)
      }
    },
    [defaultOnAutoClose],
  )

  const onClose = useCallback(
    (
      id: NoticeExtraProps["id"],
      description: NoticeExtraProps["description"],
      title: NoticeExtraProps["title"],
      onCloseProp?: (info: NoticeExtraProps) => void,
    ) => {
      const info = {
        id,
        description,
        title,
      }
      if (onCloseProp) {
        onCloseProp(info)
      }
      if (defaultOnClose) {
        defaultOnClose(info)
      }
    },
    [defaultOnClose],
  )

  const noticeFn = function (specificProps?: NoticeOptions): NoticeId {
    if (specificProps) {
      return noticeFn._call({ ...options, ...specificProps })
    }
    return noticeFn._call(options ?? {})
  } as NoticeFunction

  noticeFn._call = (callProps: NoticeOptions): NoticeId => {
    const {
      id,
      style,
      colorScheme,
      variant,
      closable,
      closeButton,
      component,
      description,
      duration,
      icon,
      limit,
      placement,
      status,
      title,
      onAutoClose: onAutoCloseProp,
      onClose: onCloseProp,
    } = callProps

    const currentLimit = limit ?? defaultLimit
    const currentPlacement = placement ?? defaultPlacement

    onChangeLimit(currentLimit)
    placementRef.current = currentPlacement

    const currentTitle = title ?? defaultTitle
    const currentDescription = description ?? defaultDescription
    const currentId = id ?? defaultId

    const toastOptions: ExternalNotice = {
      dismissible: closable ?? defaultClosable,
      duration: duration ?? defaultDuration ?? 5000,
      position: mapPlacementToPosition(currentPlacement),
      ...(currentId ? { id: currentId } : {}),
      onAutoClose: (notice) =>
        onAutoClose(
          notice.id,
          currentDescription,
          currentTitle,
          onAutoCloseProp,
        ),
      onDismiss: (notice) =>
        onClose(notice.id, currentDescription, currentTitle, onCloseProp),
    }

    function getNoticeProps(id: NoticeId) {
      return {
        id,
        close: noticeFn.close,
        closeAll: noticeFn.closeAll,
        description: currentDescription,
        title: currentTitle,
      }
    }

    if (component) {
      return toast.custom(
        (id) => withNoticeItemContext(id, noticeFn.close, noticeFn.closeAll, component(getNoticeProps(id))),
        toastOptions,
      )
    }

    if (defaultComponent) {
      return toast.custom(
        (id) => withNoticeItemContext(id, noticeFn.close, noticeFn.closeAll, defaultComponent(getNoticeProps(id))),
        toastOptions,
      )
    }

    const currentVariant = variant ?? defaultVariant
    const currentStatus = status ?? defaultStatus
    const css = { ...style, ...defaultStyle }
    const currentColorScheme = colorScheme ?? defaultColorScheme
    const currentIcon = icon ?? defaultIcon
    const isClosable = closable ?? defaultClosable
    const currentCloseButton = closeButton ?? defaultCloseButton

    return toast.custom(
      (id) =>
        withNoticeItemContext(
          id,
          noticeFn.close,
          noticeFn.closeAll,
          <NoticeRoot
            css={css}
            colorScheme={currentColorScheme}
            variant={currentVariant}
            placement={currentPlacement}
            status={currentStatus}
          >
            {currentStatus === "loading" ? (
              <NoticeLoading loadingScheme={currentIcon?.loadingScheme} />
            ) : (
              <NoticeIcon
                {...(currentIcon?.color ? { color: currentIcon.color } : {})}
              />
            )}
            <NoticeContent>
              {currentTitle ? <NoticeTitle>{currentTitle}</NoticeTitle> : null}
              {currentDescription ? (
                <NoticeDescription>{currentDescription}</NoticeDescription>
              ) : null}
            </NoticeContent>

            {isClosable && currentCloseButton ? (
              isFunction(currentCloseButton) ? (
                currentCloseButton({
                  id: currentId,
                  description: currentDescription,
                  title: currentTitle,
                })
              ) : (
                <NoticeCloseButton />
              )
            ) : null}
          </NoticeRoot>,
        ),
      toastOptions,
    )
  }

  noticeFn.close = (
    id?: NoticeExtraProps["id"],
  ): NoticeId | undefined => {
    const toasts = toast.getToasts()
    const idToDismiss = id ?? toasts[toasts.length - 1]?.id
    if (idToDismiss) {
      toast.dismiss(idToDismiss)
      return toasts[toasts.length - 2]?.id
    }
  }

  noticeFn.closeAll = (): void => {
    toast.dismiss()
  }

  noticeFn.update = (
    id: NoticeId,
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
    > {}

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
)()

export interface NoticeContentProps extends HTMLStyledProps {}

export const NoticeContent = withContext<"div", NoticeContentProps>(
  ({ ...props }) => {
    return <styled.div {...props} />
  },
  "content",
)()

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
  extends Omit<CloseButtonProps, "id">,
    Pick<NoticeOptions, "id"> {}

/**
 * @private
 * Returns props for a notice close button, including the correct onClick handler and ARIA attributes.
 * Uses the id from context if not provided in props.
 *
 * @param userProps Optional props to merge with the returned props.
 * @returns Props for a close button that will dismiss the notice.
 */
export const useNoticeCloseButtonProps = (
  userProps: NoticeCloseButtonProps = {},
) => {
  const context = useNoticeItemContext()
  const id = userProps.id ?? context?.id

  return {
    ...userProps,
    id: String(userProps.id ?? context?.id),
    "aria-label": userProps["aria-label"] ?? "Close notice",
    onClick: handlerAll(userProps.onClick, (e) => {
      e.stopPropagation()
      if (id) {
        toast.dismiss(id)
      }
    }),
  }
}

export const NoticeCloseButton = withContext<"button", NoticeCloseButtonProps>(
  (props) => {
    const buttonProps = useNoticeCloseButtonProps(props)
    return <CloseButton colorScheme="gray" {...buttonProps} />
  },
  "close-button",
)()
