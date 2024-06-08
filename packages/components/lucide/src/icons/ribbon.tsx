import { forwardRef } from "@yamada-ui/core"
import { Ribbon as RibbonIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RibbonProps = LucideIconProps

/**
 * `Ribbon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Ribbon = forwardRef<RibbonProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RibbonIcon} {...props} />
))
