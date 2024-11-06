import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Flag as LucideFlagIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlagIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlagIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFlagIcon} {...props} />
))

/**
 * @deprecated Use `FlagIcon` instead.
 */
export const Flag = FlagIcon
