import type { ReactElement, ReactNode } from "react"
import type { HTMLStyledProps, NoticeConfig } from "../../core"
import type { AlertRootProps } from "../alert"
import type { CloseButtonProps } from "../close-button"
import type { LoadingScheme } from "../loading"
import type { StatusScheme } from "../status"
import { useMemo } from "react"
import { toast } from "sonner"
import { useSystem } from "../../core"
import { Notice } from "./notice"
import { useNoticeContext } from "./notice-provider"

export interface UseNoticeOptions extends NoticeConfig {
  /**
   * Unique identifier for the notice.
   */
  id?: number | string
  /**
   * The color scheme of the notice.
   */
  colorScheme?: string
  /**
   * The variant of the notice.
   */
  variant?: AlertRootProps["variant"]
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
   * The maximum value at which notice will be displayed.
   */
  limit?: number
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
        variant,
        closable,
        closeStrategy,
        component,
        description,
        duration,
        icon,
        limit,
        loadingScheme,
        placement = "start-center",
        status,
        title,
        withIcon,
        closeButtonProps,
        contentProps,
        descriptionProps,
        iconProps,
        loadingProps,
        titleProps,
        ...toastOptions
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

      const finalToastOptions = {
        ...toastOptions,
        dismissible: closeStrategy !== "button" && closable,
        duration,
        toasterId: placement,
      }

      if (component) {
        return toast.custom(
          (t) => component({ onClose: () => toast.dismiss(t) }) as ReactElement,
          finalToastOptions,
        )
      }

      return toast.custom(
        (t) =>
          (
            <Notice
              variant={variant}
              closable={closable}
              description={description}
              icon={icon}
              loadingScheme={loadingScheme}
              status={status}
              t={t}
              title={title}
              withIcon={withIcon}
              closeButtonProps={closeButtonProps}
              contentProps={contentProps}
              descriptionProps={descriptionProps}
              iconProps={iconProps}
              loadingProps={loadingProps}
              titleProps={titleProps}
            />
          ) as ReactElement,
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
