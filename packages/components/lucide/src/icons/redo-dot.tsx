import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RedoDot as LucideRedoDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RedoDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RedoDotIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRedoDotIcon} {...props} />
))

/**
 * @deprecated Use `RedoDotIcon` instead.
 */
export const RedoDot = RedoDotIcon
