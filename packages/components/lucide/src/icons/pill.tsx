import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Pill as LucidePillIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PillIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PillIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePillIcon} {...props} />
))

/**
 * @deprecated Use `PillIcon` instead.
 */
export const Pill = PillIcon
