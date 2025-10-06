"use client"

import type { ReactNode } from "react"
import type { HTMLStyledProps, NoticeConfig } from "../../core"
import type { Alert } from "../alert"
import type { CloseButtonProps } from "../close-button"
import type { StatusScheme } from "../status"
import { useCallback, useMemo } from "react"
import { toast } from "sonner"
import { useSystem } from "../../core"
import { isArray, omitObject } from "../../utils"
import { NoticeItem } from "./notice"
import { useNoticeContext } from "./notice-provider"

export interface UseNoticeOptions
  extends Omit<NoticeConfig, "expand">,
    Omit<Alert.RootProps, "direction" | "id" | "status" | "title">,
    Pick<Alert.LoadingProps, "loadingScheme"> {
  /**
   * Unique identifier for the notice.
   */
  id?: number | string
  /**
   * The description of the notice.
   */
  description?: ReactNode
  /**
   * The status of the notice.
   */
  status?: StatusScheme
  /**
   * The title of the notice.
   */
  title?: ReactNode
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
  descriptionProps?: Alert.DescriptionProps
  /**
   * Props for the icon.
   */
  iconProps?: Alert.IconProps
  /**
   * Props for the loading component.
   */
  loadingProps?: Alert.LoadingProps
  /**
   * Props for the title.
   */
  titleProps?: Alert.TitleProps
}

export interface NoticeComponentProps {
  onClose: () => void
}

/**
 * `useNotice` is a custom hook that controls the notifications of the application using Sonner.
 *
 * @see https://yamada-ui.com/docs/hooks/use-notice
 */
export const useNotice = (options: UseNoticeOptions = {}) => {
  const { getLimit, updateLimit } = useNoticeContext()
  const { config } = useSystem()

  const systemOptions = useMemo(
    () => omitObject(config.notice ?? {}, ["expand"]),
    [config],
  )
  const defaultOptions = useMemo(
    () => ({ ...systemOptions, ...options }),
    [options, systemOptions],
  )

  const getOptions = useCallback(
    (options: UseNoticeOptions) => ({ ...defaultOptions, ...options }),
    [defaultOptions],
  )

  return useMemo(() => {
    const notice = (options: UseNoticeOptions = {}) => {
      options = getOptions(options)

      const {
        closable = true,
        closeStrategy = ["click", "drag"],
        duration,
        limit = 3,
        placement = "start",
        ...props
      } = options

      if (limit) {
        const currentLimit = getLimit(placement)

        if (currentLimit !== limit) updateLimit({ limit, placement })
      }

      const closeStrategies = isArray(closeStrategy)
        ? closeStrategy
        : [closeStrategy]

      const resolvedOptions = {
        dismissible: closeStrategies.includes("drag") && closable,
        duration: duration ?? Number.POSITIVE_INFINITY,
        toasterId: placement,
      }

      return toast.custom(
        (id) => (
          <NoticeItem
            {...props}
            id={id}
            closable={closable}
            closeStrategies={closeStrategies}
          />
        ),
        resolvedOptions,
      )
    }

    notice.close = (id: number | string) => toast.dismiss(id)

    notice.closeAll = () => toast.dismiss()

    notice.update = (id: number | string, options: UseNoticeOptions) => {
      toast.dismiss(id)

      return notice(options)
    }

    return notice
  }, [getLimit, getOptions, updateLimit])
}

export type UseNoticeReturn = ReturnType<typeof useNotice>
