import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Rewind as LucideRewindIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RewindIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RewindIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRewindIcon} {...props} />
))

/**
 * @deprecated Use `RewindIcon` instead.
 */
export const Rewind = RewindIcon
