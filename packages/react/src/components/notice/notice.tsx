import type { JSX, ReactNode } from "react"
import type { CSSObject, NoticeConfig, NoticePlacement } from "../../core"
import type {
  AlertIconProps,
  AlertLoadingProps,
  AlertRootProps,
} from "../alert"
import { toast } from "sonner"
import { ui } from "../../core"
import { isNumber } from "../../utils"
import { Alert } from "../alert"
import { CloseButton } from "../button"
import { useNoticeProviderContext } from "./notice-provider"
import { mapPlacementToPosition } from "./notice-provider"

export interface UseNoticeOptions extends NoticeConfig {
  style?: CSSObject
}

export interface NoticeProps
  extends Omit<AlertRootProps, keyof UseNoticeOptions>,
    UseNoticeOptions {
  onClose?: () => void
}

export interface NoticeOptions {
  id?: number | string
  style?: CSSObject
  variant?: AlertRootProps["variant"]
  action?:
    | ReactNode
    | {
        label: string
        onClick: () => void
      }
  cancel?:
    | ReactNode
    | {
        label: string
        onClick: () => void
      }
  closeStrategy?: "both" | "button" | "element"
  component?: () => JSX.Element
  description?: ReactNode
  duration?: UseNoticeOptions["duration"]
  icon?: AlertIconProps & { loadingScheme?: AlertLoadingProps["loadingScheme"] }
  isClosable?: boolean
  limit?: number
  placement?: NoticePlacement
  status?: "loading" | AlertRootProps["status"]
  title?: string
  onAutoClose?: () => void
  onDismiss?: () => void
}

export const useNotice = (options?: UseNoticeOptions) => {
  const { limit } = options ?? {}
  const context = useNoticeProviderContext()

  return (props: NoticeOptions) => {
    const {
      variant,
      action,
      cancel,
      closeStrategy = "button",
      component,
      description,
      duration,
      icon,
      isClosable,
      limit: hookLimit,
      placement = "start-center",
      status,
      title,
      onAutoClose,
      onDismiss,
    } = props

    const currentLimit = limit ?? hookLimit
    if (isNumber(currentLimit) && context?.onChangeLimit) {
      context.onChangeLimit(currentLimit)
    }

    const isButtonClosable =
      isClosable && (closeStrategy === "button" || closeStrategy === "both")
    // const isElementClosable =
    //   isClosable && (closeStrategy === "element" || closeStrategy === "both")

    const options = {
      action,
      cancel,
      duration: duration ?? 4000,
      position: mapPlacementToPosition(placement),
      onAutoClose,
      onDismiss,
    }

    if (component) {
      return toast.custom(component, options)
    }

    return toast.custom(
      (t) => {
        return (
          <Alert.Root
            variant={variant}
            boxShadow="fallback(lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05))"
            minW="20rem"
            pe={isButtonClosable ? 8 : undefined}
          >
            {status === "loading" ? (
              <Alert.Loading
                className="ui-notice__icon"
                loadingScheme={icon?.loadingScheme}
              />
            ) : (
              <Alert.Icon
                className="ui-notice__icon"
                {...(icon?.color ? { color: icon.color } : {})}
              >
                {icon?.children}
              </Alert.Icon>
            )}
            <ui.div flex="1">
              {title ? (
                <Alert.Title className="ui-notice__title" lineClamp={1}>
                  {title}
                </Alert.Title>
              ) : null}
              {description ? (
                <Alert.Description className="ui-notice__desc" lineClamp={3}>
                  {description}
                </Alert.Description>
              ) : null}
            </ui.div>

            {isButtonClosable ? (
              <CloseButton
                className="ui-notice__close-button"
                colorScheme="gray"
                size="sm"
                position="absolute"
                right={2}
                top={2}
                onClick={(ev) => {
                  ev.stopPropagation()
                  toast.dismiss(t)
                }}
              />
            ) : null}
          </Alert.Root>
        )
      },
      {
        ...options,
      },
    )
  }
}
