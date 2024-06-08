import { forwardRef } from "@yamada-ui/core"
import { Ligature as LigatureIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LigatureProps = LucideIconProps

/**
 * `Ligature` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Ligature = forwardRef<LigatureProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LigatureIcon} {...props} />
))
