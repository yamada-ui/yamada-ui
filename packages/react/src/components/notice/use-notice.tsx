import type { ReactElement, ReactNode } from "react"
import type { NoticePlacement } from "../../core"
import { useMemo } from "react"
import { toast } from "sonner"
import { Notice } from "."

export interface UseNoticeOptions {
  /**
   * Unique identifier for the notice.
   */
  id?: number | string
  /**
   * Custom style object.
   */
  style?: { [key: string]: any }
  /**
   * The color scheme of the notice.
   */
  colorScheme?: string
  /**
   * The variant of the notice.
   */
  variant?: "basic" | "left-accent" | "solid" | "subtle" | "top-accent"
  /**
   * If `true`, allows the notice to be removed.
   *
   * @default false
   */
  closable?: boolean
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
   * The number of `ms` the notice will continue to be displayed.
   *
   * If `null`, the notice will continue to display.
   * Please use in conjunction with `isClosable`.
   *
   * @default 5000
   */
  duration?: null | number
  /**
   * The maximum value at which notice will be displayed.
   */
  limit?: number
  /**
   * The placement of the notice.
   *
   * @default 'start-center'
   */
  placement?: NoticePlacement
  /**
   * The status of the notice.
   */
  status?: "error" | "info" | "loading" | "success" | "warning"
  /**
   * The title of the notice.
   */
  title?: string
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
  // const { theme } = useTheme()

  return useMemo(() => {
    // const themeOptions = theme.notice?.options ?? {}

    const computedOptions = (options: UseNoticeOptions) => ({
      // ...themeOptions,
      ...defaultOptions,
      ...options,
    })

    const notice = (options: UseNoticeOptions = {}) => {
      const finalOptions = computedOptions(options)
      const { component, ...toastOptions } = finalOptions

      if (component) {
        return toast.custom(
          (t) => component({ onClose: () => toast.dismiss(t) }) as ReactElement,
          {
            ...toastOptions,
            id: finalOptions.id,
            duration: finalOptions.duration ?? 5000,
          },
        )
      }

      return toast.custom(
        () =>
          (
            <Notice.Root>
              <Notice.Icon />
              <Notice.Title />
              <Notice.Description />
              <Notice.CloseButton />
            </Notice.Root>
          ) as ReactElement,
        {
          ...finalOptions,
          id: finalOptions.id,
          duration: finalOptions.duration ?? 5000,
        },
      )
    }

    notice.update = (
      id: number | string,
      options: Omit<UseNoticeOptions, "id">,
    ) => {
      const finalOptions = computedOptions(options)
      toast.dismiss(id)

      if (finalOptions.component) {
        toast.custom(
          (t) =>
            finalOptions.component!({
              onClose: () => toast.dismiss(t),
            }) as ReactElement,
          {
            ...finalOptions,
            id,
            duration: finalOptions.duration ?? 5000,
          },
        )
      } else {
        toast(finalOptions.description || finalOptions.title || "Notice", {
          ...finalOptions,
          id,
          duration: finalOptions.duration ?? 5000,
          toasterId: finalOptions.placement ?? "start-center",
        })
      }
    }

    notice.close = (id: number | string) => {
      toast.dismiss(id)
    }

    notice.closeAll = (_options?: { placement?: NoticePlacement[] }) => {
      // Sonner dismisses all toasts when called without an id
      toast.dismiss()
    }

    notice.isActive = (_id: number | string) => {
      // Sonner doesn't provide a direct way to check if a toast is active
      // This is a limitation of the migration
      return false
    }

    return notice
  }, [
    defaultOptions,
    // theme
  ])
}
