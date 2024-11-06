import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Equal as LucideEqualIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EqualIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EqualIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideEqualIcon} {...props} />
))

/**
 * @deprecated Use `EqualIcon` instead.
 */
export const Equal = EqualIcon
