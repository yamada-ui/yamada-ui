import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Text as LucideTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TextIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTextIcon} {...props} />
))

/**
 * @deprecated Use `TextIcon` instead.
 */
export const Text = TextIcon
