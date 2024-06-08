import { forwardRef } from "@yamada-ui/core"
import { Scroll as ScrollIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ScrollProps = LucideIconProps

/**
 * `Scroll` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Scroll = forwardRef<ScrollProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ScrollIcon} {...props} />
))
