import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Dot as LucideDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DotIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDotIcon} {...props} />
))

/**
 * @deprecated Use `DotIcon` instead.
 */
export const Dot = DotIcon
