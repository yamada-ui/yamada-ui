import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { EyeOff as LucideEyeOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EyeOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EyeOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideEyeOffIcon} {...props} />
))

/**
 * @deprecated Use `EyeOffIcon` instead.
 */
export const EyeOff = EyeOffIcon
