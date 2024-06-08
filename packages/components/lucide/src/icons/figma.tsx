import { forwardRef } from "@yamada-ui/core"
import { Figma as FigmaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FigmaProps = LucideIconProps

/**
 * `Figma` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Figma = forwardRef<FigmaProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FigmaIcon} {...props} />
))
