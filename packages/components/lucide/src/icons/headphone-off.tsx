import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HeadphoneOff as HeadphoneOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HeadphoneOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HeadphoneOff = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HeadphoneOffIcon} {...props} />
))
