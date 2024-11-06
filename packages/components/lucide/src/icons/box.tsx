import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Box as LucideBoxIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BoxIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BoxIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBoxIcon} {...props} />
))

/**
 * @deprecated Use `BoxIcon` instead.
 */
export const Box = BoxIcon
