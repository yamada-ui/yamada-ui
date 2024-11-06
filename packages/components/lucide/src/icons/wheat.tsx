import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Wheat as LucideWheatIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WheatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WheatIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideWheatIcon} {...props} />
))

/**
 * @deprecated Use `WheatIcon` instead.
 */
export const Wheat = WheatIcon
