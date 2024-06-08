import { forwardRef } from "@yamada-ui/core"
import { Beef as BeefIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BeefProps = LucideIconProps

/**
 * `Beef` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Beef = forwardRef<BeefProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BeefIcon} {...props} />
))
