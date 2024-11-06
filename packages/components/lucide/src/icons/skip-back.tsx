import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SkipBack as LucideSkipBackIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SkipBackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SkipBackIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSkipBackIcon} {...props} />
))

/**
 * @deprecated Use `SkipBackIcon` instead.
 */
export const SkipBack = SkipBackIcon
