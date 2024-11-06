import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HeadphoneOff as LucideHeadphoneOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HeadphoneOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeadphoneOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideHeadphoneOffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `HeadphoneOffIcon` instead.
 */
export const HeadphoneOff = HeadphoneOffIcon
