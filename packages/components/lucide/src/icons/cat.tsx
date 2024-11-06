import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cat as LucideCatIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CatIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCatIcon} {...props} />
))

/**
 * @deprecated Use `CatIcon` instead.
 */
export const Cat = CatIcon
