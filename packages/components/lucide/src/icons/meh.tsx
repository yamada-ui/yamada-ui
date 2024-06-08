import { forwardRef } from "@yamada-ui/core"
import { Meh as MehIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MehProps = LucideIconProps

/**
 * `Meh` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Meh = forwardRef<MehProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MehIcon} {...props} />
))
