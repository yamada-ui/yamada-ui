import { forwardRef } from "@yamada-ui/core"
import { Soup as SoupIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SoupProps = LucideIconProps

/**
 * `Soup` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Soup = forwardRef<SoupProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SoupIcon} {...props} />
))
