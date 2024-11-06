import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Figma as LucideFigmaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FigmaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FigmaIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFigmaIcon} {...props} />
))

/**
 * @deprecated Use `FigmaIcon` instead.
 */
export const Figma = FigmaIcon
