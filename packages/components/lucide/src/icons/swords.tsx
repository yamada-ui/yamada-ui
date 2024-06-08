import { forwardRef } from "@yamada-ui/core"
import { Swords as SwordsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SwordsProps = LucideIconProps

/**
 * `Swords` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Swords = forwardRef<SwordsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SwordsIcon} {...props} />
))
