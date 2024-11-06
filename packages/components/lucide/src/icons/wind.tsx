import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Wind as LucideWindIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WindIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WindIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWindIcon} {...props} />
))

/**
 * @deprecated Use `WindIcon` instead.
 */
export const Wind = WindIcon
