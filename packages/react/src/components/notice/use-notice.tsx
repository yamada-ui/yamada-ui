import type { ReactNode } from "react"
import type { HTMLStyledProps, NoticeConfig } from "../../core"
import type { Alert } from "../alert"
import type { CloseButtonProps } from "../close-button"
import type { LoadingScheme } from "../loading"
import type { StatusScheme } from "../status"
import { useMemo } from "react"
import { toast } from "sonner"
import { useSystem } from "../../core"
import { Notice } from "./notice"
import { useNoticeContext } from "./notice-provider"

export interface UseNoticeOptions
  extends NoticeConfig,
    Omit<Alert.RootProps, "direction" | "title">,
    Pick<Alert.LoadingProps, "loadingScheme"> {
  /**
   * Unique identifier for the notice.
   */
  id?: number | string
  /**
   * Close strategy for the notice.
   */
  closeStrategy?: "both" | "button" | "element"
  /**
   * Custom component to render.
   */
  component?: (props: { onClose: () => void }) => ReactNode
  /**
   * The description of the notice.
   */
  description?: string
  /**
   * Icon configuration for the notice.
   */
  icon?: {
    /**
     * The variant of the icon.
     */
    variant?: LoadingScheme
  }
  /**
   * The loading scheme.
   */
  loadingScheme?: string
  /**
   * The status of the notice.
   */
  status?: "loading" | StatusScheme
  /**
   * The title of the notice.
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

export interface NoticeComponentProps {
  onClose: () => void
}

/**
 * `useNotice` is a custom hook that controls the notifications of the application using Sonner.
 *
 * @see Docs https://yamada-ui.com/hooks/use-notice
 */
export const useNotice = (defaultOptions?: UseNoticeOptions) => {
  const { getLimit, updateLimit } = useNoticeContext()
  const { config } = useSystem()

  return useMemo(() => {
    const computedOptions = (options: UseNoticeOptions) => ({
      ...config.notice,
      ...defaultOptions,
      ...options,
    })

    const notice = (options: UseNoticeOptions = {}) => {
      const finalOptions = computedOptions(options)
      const {
        component,
        duration,
        limit,
        placement = "start-center",
        ...noticeProps
      } = finalOptions

      if (duration === null) {
        duration = Number.POSITIVE_INFINITY
      }

      if (limit) {
        const currentLimit = getLimit(placement)
        if (currentLimit !== limit) {
          updateLimit({ limit, placement })
        }
      }

      const { closable, closeStrategy } = noticeProps

      const finalToastOptions = {
        dismissible: closeStrategy !== "button" && closable,
        duration,
        toasterId: placement,
      }

      if (component) {
        return toast.custom(
          (id) => component({ onClose: () => toast.dismiss(id) }),
          finalToastOptions,
        )
      }

      return toast.custom(
        (id) => <Notice {...noticeProps} id={id} />,
        finalToastOptions,
      )
    }

    notice.close = (id: number | string) => {
      toast.dismiss(id)
    }

    notice.closeAll = () => {
      // Sonner dismisses all toasts when called without an id
      toast.dismiss()
    }

    notice.update = (id: number | string, options: UseNoticeOptions) => {
      // For Sonner, we need to dismiss the existing toast and create a new one
      toast.dismiss(id)
      return notice(options)
    }

    return notice
  }, [config.notice, defaultOptions, getLimit, updateLimit])
}

export type UseNoticeReturn = ReturnType<typeof useNotice>
