import { forwardRef } from "@yamada-ui/core"
import { Wine as WineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WineProps = LucideIconProps

/**
 * `Wine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Wine = forwardRef<WineProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WineIcon} {...props} />
))
