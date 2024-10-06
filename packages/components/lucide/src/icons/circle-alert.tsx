import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleAlert as CircleAlertIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleAlert` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleAlert = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CircleAlertIcon} {...props} />
))
