import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FlagOff as LucideFlagOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlagOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlagOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFlagOffIcon} {...props} />
))

/**
 * @deprecated Use `FlagOffIcon` instead.
 */
export const FlagOff = FlagOffIcon
