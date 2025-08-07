import type { FC, RefObject } from "react"
import { Toaster } from "sonner"

export interface NoticeProviderProps {
  /**
   * Whether to append to parent portal.
   */
  appendToParentPortal?: boolean
  /**
   * Container ref for the portal.
   */
  containerRef?: RefObject<HTMLElement>
  /**
   * Gap between notices.
   */
  gap?: string
  /**
   * Animation variants.
   */
  variants?: any
  /**
   * Props for individual notice items.
   */
  itemProps?: any
  /**
   * Props for the notice list.
   */
  listProps?: any
}

/**
 * `NoticeProvider` is a component that provides the notice functionality using Sonner.
 *
 * @see https://yamada-ui.com/components/notice-provider
 */
export const NoticeProvider: FC<NoticeProviderProps> = () => {
  return (
    <>
      <Toaster id="start-center" position="top-center" />
      <Toaster id="start-start" position="top-left" />
      <Toaster id="start-end" position="top-right" />
      <Toaster id="end-center" position="bottom-center" />
      <Toaster id="end-start" position="bottom-left" />
      <Toaster id="end-end" position="bottom-right" />
    </>
  )
}
