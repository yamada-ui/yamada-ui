import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UndoDot as LucideUndoDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UndoDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UndoDotIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideUndoDotIcon} {...props} />
))

/**
 * @deprecated Use `UndoDotIcon` instead.
 */
export const UndoDot = UndoDotIcon
