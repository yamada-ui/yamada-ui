import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Eye as LucideEyeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EyeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EyeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideEyeIcon} {...props} />
))

/**
 * @deprecated Use `EyeIcon` instead.
 */
export const Eye = EyeIcon
